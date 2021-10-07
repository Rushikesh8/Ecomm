
const path = require(`path`);
const { paginate } = require('gatsby-awesome-pagination');

// import {productData} from "./src/components/ProductData"

productData = [
  {id: 1,slug:'the-catcher-in-the-rye',title:"The Catcher in the Rye",author: "J.D. Salinger"},
  {id: 2,slug:'mans-search-for-meaning',title:"Man's Search for Meaning",author: "Viktor Frankl"},
]
// const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
//   // Query for nodes o use in creating pages.
//   resolve(
//     graphql(request).then(result => {
//       if (result.errors) {
//         reject(result.errors)
//       }
      
//       return result;
//     })
//   )
// });

// // Implement the Gatsby API “createPages”. This is called once the
// // data layer is bootstrapped to let plugins create pages from data.
// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions;
  
//   const getblogs = makeRequest(graphql, `
//   query {
//             allStrapiBlogs(sort: {fields: created_at}) {
//               edges {
//                 node {
//                   slug
//                   id
//                   heading
//                 }
//               }
//             }
//           }
//     `).then(result => {
//       paginate({
//         createPage,
//         items: result.data.allStrapiBlogs.edges,
//         itemsPerPage: 3,
//         pathPrefix: '/blogs',
//         component: path.resolve('src/pages/BlogList.js')
//       });
//     // Create pages for each article.
//     result.data.allStrapiBlogs.edges.forEach(({ node }) => {
//       createPage({
//         path: `blogs/${node.slug}`,
//         component: path.resolve(`src/pages/Blogpage.js`),
//         context: {
//           slug: node.slug,
//         },
//       })
//     })
//   });
  
//   // Query for articles nodes to use in creating pages.
//   return getblogs;
// };



exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions



  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    paginate({
              createPage,
              items: result.data.allMarkdownRemark.edges,
              itemsPerPage: 3,
              pathPrefix: '/blogs',
              component: path.resolve('src/components/Bloglisting.js')
            });
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`src/components/Blogpage.js`),
      context: {
        path: node.frontmatter.path
      }
    })
  })
  // productData.forEach(ele => {
  //   paginate({
  //     createPage,
  //     items: productData,
  //     itemsPerPage: 4,
  //     pathPrefix: '/',
  //     component: path.resolve('src/pages/index.js')
  //   });
  //   createPage({
  //     path:`/product/${ele.slug}`,
  //     component: path.resolve(`src/pages/DetailPage.js`),
  //     context: {
  //       slug:ele.slug
  //     }

  //   })
  // })


const productResult = await graphql(`{
  markdownRemark(frontmatter: {path: {eq: "product/"}}) {
    frontmatter {
      product {
        author
        slug
        title
        id
      }
    }
  }
}`)
if (productResult.errors) {
  reporter.panicOnBuild(`Error while running GraphQL query.`)
  return
}
console.log(productResult.data.markdownRemark.frontmatter.product)
productResult.data.markdownRemark.frontmatter.product.forEach(ele => {
  console.log(ele)
    paginate({
      createPage,
      items: productResult.data.markdownRemark.frontmatter.product,
      itemsPerPage: 4,
      pathPrefix: '/',
      component: path.resolve('src/pages/index.js')
    });
    createPage({
      path:`/product/${ele.slug}`,
      component: path.resolve(`src/pages/DetailPage.js`),
      context: {
        slug:ele.slug
      }


    })
  })
}

