import React from "react";
import CartItrm from "./CartItrm";
import CartSummary from "./CartSummary";
import { FaChevronLeft } from "react-icons/fa6";
 

function Cart() {
  return (
    <div className="w-full">
      <section className="text-center py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Shopping Cart
        </h2>
        <p className="text-xl text-gray-300">Review your selected items</p>
      </section>

      {/* <!-- Cart Content --> */}
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="lg:flex lg:gap-8">
          {/* <!-- Cart Items --> */}
          <div className="lg:w-2/3">
            {/* <!-- Cart Item --> */}
            <CartItrm/>

            {/* <!-- Continue Shopping --> */}
            <div className="text-center">
              <a
                href="products.html"
                className="inline-flex items-center text-blue-500 hover:text-blue-400"
              >
                <FaChevronLeft />
                Continue Shopping
              </a>
            </div>
          </div>

          <CartSummary />
        </div>
      </div>
    </div>
  );
}

export default Cart;
