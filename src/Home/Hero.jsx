import React, { useState } from 'react'
import List from "./DataApi"
import { useCart } from '../Context/CartContext'
import { useNavigate } from 'react-router-dom'

function Hero() {
    const [FeaturedProducts,setFeaturedProducts]=useState(List.FeaturedProducts)
    const [FreshArrivals,setFreshArrivals]=useState(List.FreshArrivals)
    const navigate=useNavigate()

  return (
    <div> <section className="relative h-screen flex items-center justify-center text-center text-white">
    <img src="https://images.pexels.com/photos/33597709/pexels-photo-33597709.jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Sneakers Collection" />
    <div className="absolute inset-0 bg-black/50"></div>
    <div className="relative z-10 max-w-2xl px-4">
      <h2 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">Discover Our Sneakers</h2>
      <p className="text-lg md:text-xl mb-8 text-gray-200">Step into comfort and style with our exclusive collection</p>
      <button onClick={()=>{navigate("/product")}} className="inline-block bg-white text-gray-700 px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition">Shop Now</button>
    </div>
  </section>

   <section className="p-10">
    <h2 className="text-2xl font-bold mb-6 text-gray-50">Featured Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

 {FeaturedProducts.map((e,i)=>{
    return(<div key={i}>
    {/* <!-- PRODUCT 4 --> */}
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
  {/* <!-- Image Container --> */}
  <div className="relative group">
    <a href="product_detail_page.html"><img className="rounded-t-lg w-full " src={e.ImgUrl} alt="JORDAN 1 RETRO HIGH DIOR" /></a>

    {/* <!-- Wishlist Icon (top-right of image) --> */}
        {/* <a href="#" className="absolute top-3 right-3 bg-white text-red-500 p-3 rounded-full shadow-lg opacity-0 -translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"><!-- Heart Icon SVG --></a> */}
    {/* <!-- Cart Icon (bottom-right of image) --> */}
    {/* <a href="cart.html" className="absolute bottom-3 right-3 bg-blue-600 text-white p-3 rounded-full shadow-lg  opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"><!-- Cart Icon SVG --></a> */}
  </div>

  {/* <!-- Product Info --> */}
  <div className="p-5">
    <a href="product_detail_page.html"><h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{e.title}</h5></a>
    <p className="mb-3 font-normal text-gray-300">MRP Rs {e.price}</p>
    <button onClick={
        ()=>{
        // handleAddToCart(e)
        navigate("/cart")
        }
        
    } className="mt-3 block bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 text-center">Buy Now</button>
      </div>
</div>
    </div>)
 })}


    </div>
  </section>
    <hr className='mt-4 shadow-lg block w-[95%]  mx-auto' />

  <section className="p-10">
    <h2 className="text-2xl font-bold mb-6 text-gray-50">Fresh Arrivals</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

 {FreshArrivals.map((e,i)=>{
    return(<div key={i}>
    {/* <!-- PRODUCT 4 --> */}
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
  {/* <!-- Image Container --> */}
  <div className="relative group">
    <a href="product_detail_page.html"><img className="rounded-t-lg w-full" src={e.ImgUrl} alt="JORDAN 1 RETRO HIGH DIOR" /></a>

    {/* <!-- Wishlist Icon (top-right of image) --> */}
        {/* <a href="#" className="absolute top-3 right-3 bg-white text-red-500 p-3 rounded-full shadow-lg opacity-0 -translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"><!-- Heart Icon SVG --></a> */}
    {/* <!-- Cart Icon (bottom-right of image) --> */}
    {/* <a href="cart.html" className="absolute bottom-3 right-3 bg-blue-600 text-white p-3 rounded-full shadow-lg  opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"><!-- Cart Icon SVG --></a> */}
  </div>

  {/* <!-- Product Info --> */}
  <div className="p-5">
    <a href="product_detail_page.html"><h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{e.title}</h5></a>
    <p className="mb-3 font-normal text-gray-300">MRP Rs {e.price}</p>
    <button onClick={
        ()=>{
        // handleAddToCart(e)
        navigate("/cart")
        }
        
    } className="mt-3 block bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 text-center">Buy Now</button>
      </div>
</div>
    </div>)
 })}


    </div>

  </section>
  </div>
  )
}

export default Hero