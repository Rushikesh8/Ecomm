import React from "react"
import Layout from "../components/Layout"
import Blogcard from "../components/Blogcard"
import { graphql, navigate, Link } from 'gatsby'


export default ({pageContext}) => {
  
  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <h1>Welcome to the Ecomm Shop</h1>
      </main>
    </Layout>
  )
}
