import { useProduct } from '../Context/ProductContext'

function Filter() {
    const {product,filtered, setFiltered}=useProduct()
  return (
     <div className="w-full  h-[15vh] top-[18vh] absolute">
      <div className="w-[90%] mx-auto">
        <button onClick={()=>setFiltered(product)} className="border  py-3 px-6 hover:border-white hover:text-white border-[#ffffff2d] text-[#d1d1d1]">All</button>
        <button onClick={()=>setFiltered(product.filter((e)=> e.brand=="Nike"))} className="border  py-3 px-6 hover:border-white hover:text-white border-[#ffffff2d] text-[#d1d1d1]">Nike</button>
        <button onClick={()=>setFiltered(product.filter((e)=> e.brand=="Adidas"))} className="border  py-3 px-6 hover:border-white hover:text-white border-[#ffffff2d] text-[#d1d1d1]">Adidas</button>
        <button onClick={()=>setFiltered(product.filter((e)=> e.brand=="Puma"))} className="border py-3 px-6 hover:border-white hover:text-white border-[#ffffff2d] text-[#d1d1d1]">Puma</button>
      </div>
    </div>
  )
}

export default Filter