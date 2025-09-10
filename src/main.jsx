import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ProductProvider } from "./Context/ProductContext.jsx";
import { CartProvider } from "./Context/CartContext.jsx";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Cart from "./Checkout/Cart.jsx";
import Product from "./Product/Product.jsx";
import Auth from "./Auth/Auth.jsx";
import ProductItem from "./Product/ProductItem.jsx";
import AboutUs from "./Home/AboutUs.jsx";
import Help from "./Home/Help.jsx";

const router = createBrowserRouter(

createRoutesFromElements(
  <Route path="/" element={<App/>}>
  <Route path="" element={<Home/>}></Route>
  <Route path="cart" element={<Cart/>}></Route>
  <Route path="product" element={<Product/>}></Route>
  <Route path="product/:_id" element={<ProductItem/>}></Route>
  <Route path="auth" element={<Auth/>}></Route>
  <Route path="aboutus" element={<AboutUs/>}></Route>
  <Route path="help" element={<Help/>}></Route>
  </Route>
)
);

createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </ProductProvider>
);
