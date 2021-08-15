import React from "react"
import icon from "../../static/cart.png"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <>
      {/* <nav className="bg-white shadow-lg">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
						<div className="">
                        <Link to="/" className="flex items-center py-4 px-2">
								<img src={icon} alt="Logo" className="h-8 w-8 mr-2"/>
								<span className="font-bold text-green-500 text-2xl">Ecomm</span>
							</Link>
						</div>
                        <Link to="/blogs" class="mr-5  text-green-400 hover:text-gray-900">Blogs</Link>
                        </div>
                        
                        </div>
                        </div>
						
		</nav> */}
      <header class="bg-white shadow-lg body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/">
            <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img src={icon} alt="Logo" className="h-8 w-8 mr-2" />
              <span class="ml-3 font-bold text-green-500 text-2xl">Ecomm</span>
            </div>
          </Link>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link to="/blogs" class="mr-5  text-green-400 hover:text-gray-900">
              Blogs
            </Link>
            {/* <a class="mr-5 hover:text-gray-900">Second Link</a>
      <a class="mr-5 hover:text-gray-900">Third Link</a>
      <a class="mr-5 hover:text-gray-900">Fourth Link</a> */}
          </nav>
          {/* <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button> */}
        </div>
      </header>
    </>
  )
}

export default Navbar
