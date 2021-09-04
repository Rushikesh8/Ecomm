import React from "react"
import Layout from "../components/Layout"
import Blogcard from "../components/Blogcard"
import { graphql, navigate, Link } from 'gatsby'
import Pager from "../components/Pager"



const BlogList = ({data,pageContext}) => {
    const blogs = data.allMarkdownRemark.edges
    console.log(data)
    return (
        <>
        <Layout>
        <main className="max-w-4xl flex-grow mx-auto flex flex-col">
        <div className="flex justify-center font-bold text-2xl text-center my-5">
          <h1 className="font-bold italic">Blogs.</h1>
        </div>
      {blogs.map((ele,idx) =>
      {
        return(
          <Link to={`${ele.node.frontmatter.path}`}>
          <Blogcard
          index={idx}
          heading={ele.node.frontmatter.heading}
          description={ele.node.frontmatter.abstract.substring(0, 200) + '...'}
          author={ele.node.frontmatter.author}
          date={ele.node.frontmatter.date}
          imgurl={ele.node.frontmatter.url}
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


// export const query = graphql`
// query ($skip: Int!, $limit: Int!) {
//   allStrapiBlogs(
//     skip: $skip,
//     limit: $limit
//     ) {
//     edges {
//       node {
//         author
//         description
//         slug
//         date
//         heading
//         id
//         image {
//           url
//           name
//         }
//       }
//     }
//   }
// }

// `

export const query = graphql`
query ($skip: Int!, $limit: Int!) {
  allMarkdownRemark
  (
       skip: $skip,
        limit: $limit
    ) {
    edges {
      node {
        frontmatter {
          author
          path
          heading
          abstract
          date
          url
        }
      }
    }
  }
}

`