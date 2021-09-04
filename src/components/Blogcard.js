import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import { StaticImage } from "gatsby-plugin-image"




const Blogcard = ({index,heading,description,author,date,imgurl}) => {
  console.log(imgurl)
    return (
        <>
        {/* <div class="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2"> */}
        {/* <!-- media --> */}
        {/* {index % 2 === 0 && <div class="h-64 w-auto md:w-1/2">
          <img class="inset-0 h-full w-full object-cover object-center" src={`${imgurl}`} />
        </div>} */}
        
        {/* <!-- content --> */}
        {/* <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
          <h3 class="font-semibold text-lg leading-tight truncate">{heading}</h3>
          <p class="mt-2">
            {description}
          </p>
          <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
            {author} &bull; {date}
          </p>
        </div> */}
        {/* {index % 2 !== 0 && <div class="h-64 w-auto md:w-1/2">
          <img class="inset-0 h-full w-full object-cover object-center" src={`${imgurl}`} />
        </div>} */}
      {/* </div> */}
      <div className={index % 2 === 0 ? 'carousel--even' : 'carousel--odd' }>
        {index % 2 === 0 && <img className="imgBlog" src={imgurl}  alt="image"/>}
        <div class="testimonial">
            <h1 className="mb-3 text-2xl font-bold">{heading}</h1>
            <p className="testimonial-text">{description}</p>
            <p className="testimonial-author">{author}</p>
            <p className="testimonial-job">{date}</p>
        </div>
        {index % 2 !== 0 && <img className="imgBlog" src={imgurl}  alt="image"/>}
        
    </div>
        </>
    )
}

export default Blogcard;