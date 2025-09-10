import { FaRegCircleCheck } from "react-icons/fa6";
import { HiOutlineCube } from "react-icons/hi";
import { RiLoopLeftFill } from "react-icons/ri";
import { TbFocus2 } from "react-icons/tb";
import ADIDASVENTO from "../media/ADIDASVENTO.jpg";
import ASICS from "../media/ASICS.jpeg";
import adidasF from "../media/adidasF.jpeg";
import Nike from "../media/Nike.jpeg";
import pumaF from "../media/pumaF.jpeg";
const List = {
  FooterGoodwill: [
    {
      color: "bg-orange-600",
      dis: "Verified genuine products",
      title: "100% Authentic",
      url: "",
      img: FaRegCircleCheck,
    },
    {
      color: "bg-blue-600",
      dis: "On orders above ₹2,000",
      title: "Free Shipping",
      url: "",
      img: HiOutlineCube,
    },
    {
      color: "bg-green-600",
      dis: "30-day return policy",
      title: "Easy Returns",
      url: "",
      img: RiLoopLeftFill,
    },
    {
      color: "bg-purple-600",
      dis: "Always here to help",
      title: "24/7 Support",
      url: "",
      img: TbFocus2,
    },
  ],
  FeaturedProducts: [
    {
      title: "Nike",
      ImgUrl: Nike,
    },
    {
      title: "Adidas",
      ImgUrl: adidasF,
    },
    {
      title: "Asics",
      ImgUrl: ASICS,
    },
    {
      title: "Puma",
      ImgUrl: pumaF,
    },
  ],
    FreshArrivals: [
    {
      _id:1,
      title: "JORDAN 1 RETRO OG SPIDER",
      ImgUrl: ADIDASVENTO,
      price: "19,999",
    },
    {
      _id:2,
      title: "JORDAN 1 RETRO OG SPIDER",
      ImgUrl: ADIDASVENTO,
      price: "19,999",
    },
    {
      _id:3,
      title: "JORDAN 1 RETRO OG SPIDER",
      ImgUrl: ADIDASVENTO,
      price: "19,999",
    },
    {
      _id:4,
      title: "JORDAN 1 RETRO OG SPIDER",
      ImgUrl: ADIDASVENTO,
      price: "19,999",
    },
  ],
};
export default List;
