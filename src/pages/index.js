import React,{useRef} from "react"
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
  const myRef = useRef(null);
  console.log("index")
  console.log(data)
  const handleScroll = () => {
    // setShowHistory(data)
    // debugger
    // setTimeout(() => {
      if (myRef && myRef.current) {
        myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    // }, 500); // Increase this delay if Scroll is not aligned with PD History
  }

  return (
    <Layout>
      <main className="">
        <div className="hero-section">
        <div className="absolute w-1/2 hero-heading font-bold italic text-4xl text-center my-5">
        <h1 className="">Hi Bookworms !</h1> 
        <h1 className="">Welcome to the Ecomm Shop</h1>
        <button class="bg-green-600 hover:bg-green-500 text-white text-lg font-bold py-2 px-4 rounded" onClick={() => handleScroll() }>
        Let's Go !
       </button>
        </div>
        </div>
        
        <section className="max-w-4xl flex-grow mx-auto flex flex-col justify-around mb-20">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-8 md:mx-0 my-10" ref={myRef}>
          {data.allMarkdownRemark.edges[0].node.frontmatter.product.map(ele => <Link to={`product/${ele.slug}`}><Card data={ele}></Card></Link>)}
        
        </div>
        {/* <ProductList pageContext={pageContext}/> */}
        <Pager pageContext={pageContext}/>
        </section>
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
