import React from "react"
import Layout from "../components/Layout"
import Blogcard from "../components/Blogcard"
import { graphql, navigate, Link } from 'gatsby'
import Pager from "../components/Pager"



const BlogList = ({data,pageContext}) => {
    const blogs = data.allStrapiBlogs.edges
    return (
        <>
        <Layout>
        <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <div className="flex justify-center font-bold text-2xl text-center my-5">
          <h1 className="font-bold italic">Blogs.</h1>
        </div>
      {blogs.map((ele,idx) =>
      {
        return(
          <Link to={`/blogs/${ele.node.slug}`}>
          <Blogcard
          index={idx}
          heading={ele.node.heading}
          description={ele.node.description.substring(0, 200) + '...'}
          author={ele.node.author}
          date={ele.node.date}
          imgurl={ele.node.image[0].url}
          ></Blogcard></Link>
        )
      } )}
      <Pager pageContext={pageContext}/>
      </main>
        </Layout>
        
        </>
    )
}
export default BlogList;


export const query = graphql`
query ($skip: Int!, $limit: Int!) {
  allStrapiBlogs(
    skip: $skip,
    limit: $limit
    ) {
    edges {
      node {
        author
        description
        slug
        date
        heading
        id
        image {
          url
          name
        }
      }
    }
  }
}

`