
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
}

