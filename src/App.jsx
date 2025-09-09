import { Outlet } from "react-router-dom"
import Footer from "./Home/Footer.jsx"
import Nav from "./Home/Nav.jsx"


function App() {

  return (
    <>
    <div className="bg-[#141D2D] flex flex-col ">
      <div className="h-[12vh] w-full"></div>
      <Nav/>
      <Outlet/>
      <Footer/>
      </div>
    </>
  )
}

export default App
