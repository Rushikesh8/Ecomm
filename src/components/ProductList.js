import React from "react"
import Card from "./eCard"
import { graphql, navigate, Link,useStaticQuery} from 'gatsby'


const productData = [
    {id: 1,slug:'the-catcher-in-the-rye',title:"The Catcher in the Rye",author: "J.D. Salinger",category:"Book"},
    {id: 2,slug:'mans-search-for-meaning',title:"Man's Search for Meaning",author: "Viktor Frankl",category:"Book"},
  ]

const ProductList = () => {
    const productList = useStaticQuery(graphql`{
        markdownRemark(frontmatter: {path: {eq: "product/"}}) {
          frontmatter {
            product {
              author
              slug
              title
              id
              category
            }
          }
        }
      }`)
      console.log(productList.markdownRemark.frontmatter.product)
      

    return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-8 md:mx-0">
          {productList.markdownRemark.frontmatter.product.map(ele => <Link to={`product/${ele.slug}`}><Card data={ele}></Card></Link>)}

        </div>
    )
}

export default ProductList;


// export const productList = () => {
//     const data = useStaticQuery(graphql`
//       {
//         site {
//           siteMetadata {
//             title
//             description
//           }
//         }
//       }
//     `)
//     return data.site.siteMetadata
//   }