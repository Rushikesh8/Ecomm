import { graphql } from 'gatsby'
import React from 'react'
import Layout from "../components/Layout"


const Blogpage = ({data,pageContext}) =>{
    // const post = data.allStrapiBlogs.edges[0]
    const {markdownRemark} = data
    const {frontmatter,html} = markdownRemark
    return (
        <>
        <Layout>
        <main class="text-gray-600 body-font">
     <div class="container px-5 pt-12 pb-24 mx-auto flex flex-wrap flex-col text-center">
     <h1 class=" font-bold title-font mb-8 text-gray-900 text-5xl">{frontmatter.heading}</h1>
    <img class="xl:w-3/4 xl:h-2/4 lg:w-1/4 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded" alt="hero" src={frontmatter.url}/>
    <div class="flex justify-center w-full">
    <h1 class=" font-bold title-font mb-4 text-gray-600 text-lg">{frontmatter.author}  |  {frontmatter.date}</h1>
    </div>
    <div class="flex flex-col text-center w-full">
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-black" dangerouslySetInnerHTML={{ __html: html }}></p>
    </div>
  </div>

   </main>
   </Layout>
        </>
    )
}

export default Blogpage;

// export const query = graphql`
// query blogquery($slug:String!) {
//     allStrapiBlogs(filter: {slug: {eq:$slug}}) {
//       edges {
//         node {
//           author
//           description
//           slug
//           date
//           heading
//           id
//           image {
//             url
//             name
//           }
//         }
//       }
//     }
//   }`

export const query = graphql`
query blog($path: String!) {
  markdownRemark(frontmatter: {path: {eq: $path}}) {
    html
    frontmatter {
      author
      heading
      path
      title
      date
      url
    }
  }
}`