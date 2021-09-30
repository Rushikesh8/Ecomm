import React from 'react'


const Card = ({data}) => {
  const {title,author,slug,category} = data
    return (
        <>
        <div class="flex justify-center items-center">
  <div class="w-full p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
    <img class="w-full object-cover rounded-t-md" src="https://images.unsplash.com/photo-1509223197845-458d87318791" alt="" />
    <div class="mt-4">
      <h1 class="text-2xl font-bold text-gray-700">{title}</h1>
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
      <div class="mt-4 mb-2 flex justify-between pl-4 pr-2">
        <button class="block text-xl font-semibold text-gray-700 cursor-auto">$12.99</button>
        <button class="text-lg block font-semibold py-2 px-6 text-green-100 hover:text-white teal-bg-color rounded-lg shadow hover:shadow-md transition duration-300">Buy</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}
export default Card;