import React from "react"
import Layout from "../components/Layout"
import Blogcard from "../components/Blogcard"
import Card from "../components/eCard"
import { graphql, navigate, Link } from 'gatsby'
import Pager from "../components/Pager"
import ProductList from "../components/ProductList"

const productData = [
  {id: 1,slug:'the-catcher-in-the-rye',title:"The Catcher in the Rye",author: "J.D. Salinger",category:"Book"},
  {id: 2,slug:'mans-search-for-meaning',title:"Man's Search for Meaning",author: "Viktor Frankl",category:"Book"},
]
export default ({data,pageContext}) => {
  console.log("index")
  console.log(data)
  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around mb-10">
        <h1 className="font-bold italic text-3xl text-green-600 text-center my-5">Welcome to the Ecomm Shop</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-8 md:mx-0">
          {data.allMarkdownRemark.edges[0].node.frontmatter.product.map(ele => <Link to={`product/${ele.slug}`}><Card data={ele}></Card></Link>)}
        
        </div>
        {/* <ProductList pageContext={pageContext}/> */}
        <Pager pageContext={pageContext}/>
      </main>
    </Layout>
  )
}

export const products = graphql`
{
  allMarkdownRemark(filter: {frontmatter: {path: {eq: "product/"}}}) {
    edges {
      node {
        id
        frontmatter {
          product {
            author
            category
            id
            price
            slug
            title
            url
          }
        }
      }
    }
  }
  }`
