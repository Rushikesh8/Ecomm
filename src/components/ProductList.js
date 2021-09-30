// import React from "react"
// import Card from "./eCard"
// import { graphql, navigate, Link,useStaticQuery} from 'gatsby'


// const productData = [
//     {id: 1,slug:'the-catcher-in-the-rye',title:"The Catcher in the Rye",author: "J.D. Salinger",category:"Book"},
//     {id: 2,slug:'mans-search-for-meaning',title:"Man's Search for Meaning",author: "Viktor Frankl",category:"Book"},
//   ]

// const ProductList = ({pageContext}) => {
//     const productList = useStaticQuery(graphql`{
//       allMarkdownRemark(filter: {frontmatter: {path: {eq: "product/"}}}) {
//         edges {
//           node {
//             id
//             frontmatter {
//               product {
//                 author
//                 category
//                 id
//                 price
//                 slug
//                 title
//                 url
//               }
//             }
//           }
//         }
//       }
//       }`)
//       console.log(productList.allMarkdownRemark.edges[0].node.frontmatter.product)
      

//     return(
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-8 md:mx-0">
//           {productList.allMarkdownRemark.edges[0].node.frontmatter.product.map(ele => <Link to={`product/${ele.slug}`}><Card data={ele}></Card></Link>)}

//         </div>
//     )
// }

// export default ProductList;


// // export const productList = () => {
// //     const data = useStaticQuery(graphql`
// //       {
// //         site {
// //           siteMetadata {
// //             title
// //             description
// //           }
// //         }
// //       }
// //     `)
// //     return data.site.siteMetadata
// //   }