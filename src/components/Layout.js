import React from "react"
import SEO from "./SEO"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen bg-gray-200 w-full">
        {/* <header className="p-4 bg-teal-500 text-white font-semibold">
          <h1 className="max-w-4xl mx-auto">gatsby-starter-tailwind-css</h1>
        </header> */}
        <Navbar/>
        {children}
        <footer className="py-10 text-center text-gray-600 text-xs bg-white border-t-2 border-teal-500">
          &copy; Ecomm 2021
        </footer>
      </div>
    </>
  )
}

export default Layout
