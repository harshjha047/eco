import React from 'react'
import { FaSquareXTwitter,FaSquareInstagram, FaLinkedin  } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5"
import Icon from './Icon';
import GoodWill from './GoodWill';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
  {/* <!-- Main Footer Content --> */}
  <div className="container mx-auto px-4 py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* <!-- Company Info --> */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <h3 className="text-2xl font-bold text-orange-400">LOGO</h3>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          India's premier destination for authentic sneakers. From limited edition drops to everyday essentials, we bring you the best in sneaker culture.
        </p>
        
        {/* <!-- Social Media Links --> */}
        <div className="flex space-x-4 pt-2">
            <Icon><FaSquareXTwitter/></Icon>
            <Icon><FaSquareInstagram/></Icon>
            <Icon><FaLinkedin/></Icon>
            <Icon><IoLogoDiscord/></Icon>
          
        </div>
      </div>

      {/* <!-- Quick Links --> */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
        <ul className="space-y-2">
          <li><a href="index.html" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Home</a></li>
          <li><a href="products.html" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">All Products</a></li>
          <li><a href="about.html" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">About Us</a></li>
          <li><a href="help.html" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Help & FAQ</a></li>
          <li><a href="profile.html" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">My Account</a></li>
          <li><a href="order-confirmation.html" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Order Status</a></li>
        </ul>
      </div>

      {/* <!-- Customer Service --> */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-white">Customer Service</h4>
        <ul className="space-y-2">
          <li><a href="help.html" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Contact Us</a></li>
          <li><a href="help.html" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Shipping Info</a></li>
          <li><a href="help.html" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Returns & Exchanges</a></li>
          <li><a href="help.html" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Size Guide</a></li>
          <li><a href="help.html" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Care Instructions</a></li>
          <li><a href="privacy-terms.html" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Privacy Policy</a></li>
        </ul>
      </div>

      {/* <!-- Newsletter & Contact --> */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-white">Stay Connected</h4>
        <p className="text-gray-400 text-sm">Get the latest drops and exclusive deals delivered to your inbox.</p>
        
        {/* <!-- Newsletter Signup --> */}
        <div className="space-y-3">
          <div className="flex">
            <input type="email" placeholder="Enter your email" 
                   className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"/>
            <button className="px-4 py-2 bg-orange-600 text-white rounded-r-lg hover:bg-orange-700 transition-colors text-sm font-medium">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500">By subscribing, you agree to receive marketing emails from ABHI.</p>
        </div>

        {/* <!-- Contact Info --> */}
        <div className="pt-4 space-y-2">
          <div className="flex items-center space-x-2 text-sm">
            <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span className="text-gray-400">+91 1800-SNEAKER</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span className="text-gray-400">support@abhi.com</span>
          </div>
          <div className="flex items-start space-x-2 text-sm">
            <svg className="w-4 h-4 text-orange-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span className="text-gray-400">Mumbai, Maharashtra<br/>India</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Trust Badges & Features --> */}
  <div className="border-t border-gray-800">
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <GoodWill/>
      </div>
    </div>
  </div>

  {/* <!-- Payment Methods --> */}
  <div className="border-t border-gray-800">
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">

        {/* <!-- Security Badge --> */}
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
          </svg>
          <span>Secured by SSL</span>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Bottom Footer --> */}
  <div className="border-t border-gray-800 bg-black">
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* <!-- Copyright --> */}
        <div className="text-center md:text-left">
          <p className="text-gray-500 text-sm">&copy; 2025 ABHI Sneakers. All Rights Reserved.</p>
          <p className="text-gray-600 text-xs mt-1">Made with ❤️ for sneakerheads in India</p>
        </div>

        {/* <!-- Legal Links --> */}
        <div className="flex items-center space-x-6 text-sm">
          <a href="T&C.html" className="text-gray-500 hover:text-orange-400 transition-colors">Privacy Policy</a>
          <a href="T&C.html" className="text-gray-500 hover:text-orange-400 transition-colors">Terms of Service</a>
          <a href="help.html" className="text-gray-500 hover:text-orange-400 transition-colors">Sitemap</a>
        </div>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer