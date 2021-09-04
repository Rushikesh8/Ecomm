import React from "react"
import Layout from "../components/Layout"
import Blogcard from "../components/Blogcard"
import Card from "../components/eCard"
import { graphql, navigate, Link } from 'gatsby'


export default ({pageContext}) => {
  
  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around mb-10">
        <h1 className="font-bold italic text-3xl text-green-600 text-center my-5">Welcome to the Ecomm Shop</h1>
        <div className="grid grid-cols-3 gap-10">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>

        </div>
      </main>
    </Layout>
  )
}
