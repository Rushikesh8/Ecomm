
const path = require(`path`);
const { paginate } = require('gatsby-awesome-pagination');


// const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
//   // Query for nodes to use in creating pages.
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
const productData = [{
  id: 1,
  title: "Cather in the Rye",
  slug: "cather-in-the-rye",
  author: "John Doe",
  price: 499,
  url: "https://dm-tritiwebsite.s3.ap-south-1.amazonaws.com/2102_i039_027_bank_loan_isometric_e65b925dcb.jpg",
  description: "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan."
},
{
  id: 2,
  title: "Man Search for Meaning",
  slug: "man-search-for-meaning",
  author: "John Doe",
  price: 499,
  url: "https://dm-tritiwebsite.s3.ap-south-1.amazonaws.com/2102_i039_027_bank_loan_isometric_e65b925dcb.jpg",
  description: "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan."
}]

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
              component: path.resolve('src/pages/BlogList.js')
            });
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`src/pages/Blogpage.js`),
      context: {}
    })
  })
  productData.forEach(ele => {
    createPage({
      path:`/product/${ele.slug}`,
      component: path.resolve(`src/pages/DetailPage.js`),
      context: {
        title : ele.title,
        author: ele.author
      }
    })
  })
}

