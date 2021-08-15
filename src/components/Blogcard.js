import React from "react"



const Blogcard = ({heading,description,author,date,imgurl}) => {
    return (
        <>
        <div v-for="card in cards" class="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
        {/* <!-- media --> */}
        <div class="h-64 w-auto md:w-1/2">
          <img class="inset-0 h-full w-full object-cover object-center" src={`http://localhost:1337${imgurl}`} />
        </div>
        {/* <!-- content --> */}
        <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
          <h3 class="font-semibold text-lg leading-tight truncate">{heading}</h3>
          <p class="mt-2">
            {description}
          </p>
          <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
            {author} &bull; {date}
          </p>
        </div>
      </div>
        </>
    )
}

export default Blogcard;