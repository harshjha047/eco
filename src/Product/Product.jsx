import { useCart } from "../Context/CartContext";
import { useProduct } from "../Context/ProductContext";
import { BsCart2 } from "react-icons/bs";
import Filter from "./Filter";
import { NavLink } from "react-router-dom";

function Product() {
  let {handleAddToCart,handleRemoveToCart}=useCart()
  let {product,setProduct,filtered}=useProduct()
  // console.log(product);
  
  return (
    <>
   <Filter/>
    <section className="container mx-auto px-4 mt-[18vh] grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    
    {filtered.map((p,i)=>{return(
      
    <div key={i} className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 relative group">
      {/* {console.log(p._id)} */}
      <NavLink to={`${p._id.toString()}`}>
      <div className="flex justify-between items-center mb-4">
        <img src={p.brandLogo} alt={p.brand} className="h-12"/>
      </div>

      <div className="relative flex justify-center">
        <img src={p.images[0].url} alt={p.category} className="h-40 object-contain"/>
    {/* <a href="cart.html"
       className="absolute bottom-3 right-3 bg-blue-600 text-white p-3 rounded-full shadow-lg 
              opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 
              transition-all duration-300">
      <BsCart2 />
    </a> */}
      </div>

      <div className="mt-4">
        <span className="bg-green-100 text-green-600 text-xs font-medium px-3 py-1 rounded-full">Best Seller</span>
      </div>

      <h3 className="mt-3 font-semibold text-gray-800">{p.name}</h3>

      <div className="mt-4 flex justify-between items-center">
        <p className="text-gray-600 text-sm">Price</p>
        <p className="font-bold text-green-600 text-lg">₹{p.price}</p>
      </div>
      </NavLink>

      <button onClick={()=>{handleAddToCart(p)}} className="mt-4 w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition">
        Add to Cart
      </button>
    </div>
    
    )})}

    

  </section>
    
</>  )
}

export default Product