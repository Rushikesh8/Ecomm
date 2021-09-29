const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")

const { theme } = resolveConfig(tailwindConfig)

module.exports = {
  siteMetadata: {
    title: "Ecomm",
    author: "",
    description: "This is e-commerce website with dedicated blog",
  },
  flags: {
    THE_FLAG: false,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Ecomm",
        short_name: "e-comm",
        start_url: "/",
        background_color: theme.colors.white,
        theme_color: theme.colors.teal[500],
        icon: "static/cart.png",
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    // {
    //   resolve: "gatsby-source-strapi",
    //   options: {
    //     apiURL: "http://localhost:1337",
    //     collectionTypes: [
    //       "Blogs"
    //     ],
    //     queryLimit: 1000,
    //   },
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name:"blogs",
        path:`${__dirname}/src/blogs`
        
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name:"product",
        path:`${__dirname}/src/product`
        
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name:"images",
        path:`${__dirname}/src/images`
        
      },
    },
    'gatsby-transformer-remark',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`
  ],
}
