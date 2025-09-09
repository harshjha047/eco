import { useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useProduct } from '../Context/ProductContext'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useCart } from '../Context/CartContext';

function ProductItem() {
    const {_id}=useParams()
    const {filtered }=useProduct()
    const {cart, handleAddToCart, handleRemoveToCart}=useCart()
    const [data] = filtered.filter((e)=>e._id==_id)
    const[ind,setInd]=useState(0)
    const [units] = cart.filter((i)=>i._id==_id)
    const navigate =useNavigate()
    const imgInd=data.images
    const [numbers, setNumbers] = useState(data.reviews);

  const average =
    numbers.length > 0
      ? numbers.reduce((sum, num) => sum + num.rating, 0) / numbers.length
      : 0;
    // const average = data.reviews.reduce((sum, num) => sum + num.rating, 0) / data.reviews.length;
    console.log(data)
  return (
    <div>

        {/* <!-- Breadcrumb --> */}
  <div className="container mx-auto px-4 py-4">
    <nav className="text-gray-400">
      <NavLink to="/" className="hover:text-white">Home</NavLink>
      <span className="mx-2">/</span>
      <NavLink to="/product" className="hover:text-white">Products</NavLink>
      <span className="mx-2">/</span>
      <span className="text-white">{data.name}</span>
    </nav>
  </div>

  {/* <!-- Product Detail --> */}
  <div className="container mx-auto px-4 py-8">
    <div className="lg:flex lg:gap-12">
      {/* <!-- Product Images --> */}
      <div className="lg:w-1/2">
        <div className="mb-4 relative">
            <div className=" absolute border h-full flex justify-between items-center w-full">
                <div className={`h-12 w-12 border m-4 flex justify-center items-center left-0 absolute text-xl bg-[#0000004d] rounded-full cursor-pointer text-[#fff] ${ind==0?"hidden":""}`} onClick={()=>{setInd(ind-1)}}><FaChevronLeft /></div>
                <div className={`h-12 w-12 border m-4 flex justify-center items-center right-0 absolute text-xl bg-[#0000004d] rounded-full cursor-pointer text-[#fff] ${ind==(imgInd.length-1)?"hidden":""}`} onClick={()=>{setInd(ind+1)}}><FaChevronRight/></div>
            </div>
          <img id="main-image" src={imgInd[ind].url} alt={imgInd[ind].alt} className="w-full rounded-lg"/>
        </div>
        
        {/* <!-- Thumbnail Images --> */}
        <div className="flex space-x-2">
            {imgInd.map((r,i)=>{
                return(
          <img src={r.url} alt="Thumbnail 1" onClick={()=>setInd(i)} key={i} className="w-20 h-20 object-cover rounded-lg cursor-pointer border-2 border-blue-500" />
                )
            })}
                </div>
      </div>

      {/* <!-- Product Info --> */}
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{data.name}</h1>
        
        {/* <!-- Price --> */}
        <div className="mb-6">
          <span className="text-3xl font-bold text-white">₹{data.price}</span>
          {/* <span className="text-lg text-gray-400 line-through ml-2">₹19,999</span>
          <span className="bg-red-600 text-white px-2 py-1 rounded-full text-sm ml-2">25% OFF</span> */}
        </div>

        {/* <!-- Rating --> */}
        <div className="flex items-center mb-6">
          <div className="flex ">
            <svg className={`w-5 h-5 fill-current ${average>=1?"text-yellow-400":""}`} viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
            <svg className={`w-5 h-5 fill-current ${average>=2?"text-yellow-400":""}`} viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
            <svg className={`w-5 h-5 fill-current ${average>=3?"text-yellow-400":""}`} viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
            <svg className={`w-5 h-5 fill-current ${average>=4?"text-yellow-400":""}`} viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
            <svg className={`w-5 h-5 fill-current ${average==5?"text-yellow-400":""}`} viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
          </div>
          <span className="text-gray-400 ml-2">{average} ({data.reviews.length} reviews)</span>
        </div>

        {/* <!-- Description --> */}
        <div className="mb-6">
          <p className="text-gray-300">{data.description}</p>
        </div>

        {/* <!-- Color Options --> */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">Color</h3>
          <div className="flex space-x-3">
            <button className="w-8 h-8 rounded-full bg-black border-2 border-white"></button>
            <button className="w-8 h-8 rounded-full bg-red-600 border-2 border-transparent hover:border-white"></button>
            <button className="w-8 h-8 rounded-full bg-blue-600 border-2 border-transparent hover:border-white"></button>
          </div>
        </div>

        {/* <!-- Size Selection --> */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">Size</h3>
          <div className="grid grid-cols-4 gap-2">
            <button className="py-2 px-4 border border-gray-600 text-gray-400 rounded-lg hover:border-blue-500 hover:text-blue-500">6</button>
            <button className="py-2 px-4 border border-gray-600 text-gray-400 rounded-lg hover:border-blue-500 hover:text-blue-500">7</button>
            <button className="py-2 px-4 border border-gray-600 text-gray-400 rounded-lg hover:border-blue-500 hover:text-blue-500">8</button>
            <button className="py-2 px-4 border border-blue-500 text-blue-500 rounded-lg">9</button>
            <button className="py-2 px-4 border border-gray-600 text-gray-400 rounded-lg hover:border-blue-500 hover:text-blue-500">10</button>
            <button className="py-2 px-4 border border-gray-600 text-gray-400 rounded-lg hover:border-blue-500 hover:text-blue-500">11</button>
            <button className="py-2 px-4 border border-gray-600 text-gray-400 rounded-lg hover:border-blue-500 hover:text-blue-500">12</button>
          </div>
        </div>

        {/* <!-- Quantity --> */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-3">Quantity</h3>
          <div className="flex items-center bg-gray-800 rounded-lg w-fit">
            <button className="px-4 py-2 text-white hover:bg-gray-700 rounded-l-lg" onClick={()=>handleRemoveToCart(data)}>-</button>
            <span className="px-6 py-2 text-white">{units?units.unit:"0"}</span>
            <button className="px-4 py-2 text-white hover:bg-gray-700 rounded-r-lg" onClick={()=>handleAddToCart(data)}>+</button>
          </div>
        </div>

        {/* <!-- Action Buttons --> */}
        <div className="space-y-4">
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700" onClick={()=>handleAddToCart(data)}>
            Add to Cart
          </button>
          <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700" onClick={()=>{
            handleAddToCart(data)
            navigate("/cart")

          }}>
            Buy Now
          </button>
        </div>

        {/* <!-- Product Features --> */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="flex items-center text-gray-300">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span className="text-sm">Authentic Product</span>
          </div>
          <div className="flex items-center text-gray-300">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
            <span className="text-sm">Free Shipping</span>
          </div>
          <div className="flex items-center text-gray-300">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"/>
            </svg>
            <span className="text-sm">Easy Returns</span>
          </div>
          <div className="flex items-center text-gray-300">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            <span className="text-sm">24/7 Support</span>
          </div>
        </div>
      </div>
    </div>
    

    {/* <!-- Product Details Tabs --> */}
    <div className="mt-16">
      <div className="border-b border-gray-700">
        <nav className="-mb-px flex space-x-8">
          <button className="py-2 px-1 border-b-2 border-blue-500 text-blue-500 font-medium">Description</button>
          <button className="py-2 px-1 border-b-2 border-transparent text-gray-400 hover:text-white">Specifications</button>
          <button className="py-2 px-1 border-b-2 border-transparent text-gray-400 hover:text-white">Reviews</button>
        </nav>
      </div>
      
      <div className="py-8">
        <div className="text-gray-300 space-y-4">
          <p>The Air Jordan 1 Low SE "Black Toe" brings the iconic colorway of the original Air Jordan 1 to the low-top silhouette. This timeless design features premium leather construction with classNameic black and white color blocking.</p>
          <p>Originally released in 1985, the Air Jordan 1 revolutionized basketball footwear and street style. This low-top version maintains all the essential design elements while offering a more casual, everyday wearable style.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Premium leather upper</li>
            <li>Classic black toe design</li>
            <li>Air-sole unit for cushioning</li>
            <li>Rubber outsole with pivot point</li>
            <li>Wings logo on ankle</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default ProductItem