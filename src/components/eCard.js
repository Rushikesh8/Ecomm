import React from 'react'


const Card = ({data}) => {
  const {title,author,slug,category,price,url,id} = data
  console.log(price)
  const product_url = "product/" + slug
    return (
        <>
        <div class="flex justify-center items-center">
  <div class="w-full h-full p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
    <div className="h-auto"><img class="card-img-top  rounded-t-md" src={url} alt=""/></div>
    <div class="mt-4">
      <h1 class="text-2xl font-bold text-gray-700 h-16">{title}</h1>
      <p class="text-sm mt-2 text-gray-700">{category}</p>
      <div class="mt-3 space-x-4 flex p-1">
        {/* <div class="p-1 border-4 rounded-full cursor-pointer hover:border-green-200 hover:scale-105 transition transform duration-200">
          <span class="block h-6 w-6 bg-green-400 rounded-full"> </span>
        </div>
        <div class="p-1 border-4 rounded-full cursor-pointer hover:border-blue-200 hover:scale-105 transition transform duration-200">
          <span class="block h-6 w-6 bg-blue-400 rounded-full"> </span>
        </div>
        <div class="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
          <span class="block h-6 w-6 bg-yellow-400 rounded-full"> </span>
        </div> */}
      </div>
      <div class="mt-4 mb-2 flex justify-between items-center">
        <button class="block text-xl font-semibold text-gray-700 cursor-auto">&#8377;{price}</button>
        <button class="text-lg block font-semibold py-2 px-6 text-green-100 hover:text-white teal-bg-color rounded-lg shadow hover:shadow-md transition duration-300"
          data-item-id={id}
          data-item-name={title}
          data-item-url="/"
          data-item-price={price}>Buy</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}
export default Card;