import React from "react"
import icon from "../../static/cart.png"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <>
      
      {/* <header class="bg-white shadow-lg body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/">
            <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="#FFBC00">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
              <span class="ml-3 font-bold teal-color text-2xl">Ecomm</span>
            </div>
          </Link>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link to="/blogs" class="mr-5  text-green-400 hover:text-gray-900">
              Blogs
            </Link>

          </nav>
          
        </div>
      </header> */}
      <nav class="bg-white shadow w-full border-b-2 border-teal-500">
        <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div class="flex items-center justify-between">
                <div>
                    <Link to="/"><h1 class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 teal-color">EComm</h1></Link>
                </div>
                
                {/* <!-- Mobile menu button --> */}
                <div class="flex md:hidden">
                    <button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
            <div class="items-center md:flex">
                <div class="flex flex-col md:flex-row md:mx-6">
                   <Link to="#"><p class="my-1 text-base font-semibold text-gray-700  hover:text-teal-500 dark:hover:text-indigo-400 md:mx-4 md:my-0">Home</p></Link> 
                  <Link to="/blogs"> <p class="my-1 text-base font-semibold text-gray-700 hover:text-teal-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" >Blogs</p></Link> 
                  {/* <Link to="#"><p class="my-1 text-base font-semibold text-gray-700  hover:text-teal-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" >Contact</p></Link> 
                  <Link to="#"><p class="my-1 text-base font-semibold text-gray-700  hover:text-teal-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" >About</p></Link>  */}
                </div>

                <div class="flex justify-center md:block">
                    {/* <a class="relative text-gray-700  hover:text-teal-600" href="#">
                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <span class="absolute top-0 left-0 p-1 text-xs text-white bg-indigo-500 rounded-full"></span>
                    </a> */}
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
