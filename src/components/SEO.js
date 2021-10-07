import React from "react"
import { Helmet } from "react-helmet"
import {useSiteMetadata} from "../hooks/useSiteMetadata"

const SEO = () => {
  // const { title, description } = useSiteMetadata()

  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="description" content={"Eommerce site"} />
      <meta property="og:title" content={"Ecomm"} />
      <meta property="og:description" content={"Eommerce site"} />
      <meta property="og:type" content="website" />
      <title>{"Ecomm"}</title>
    </Helmet>
  )
}

export default SEO
