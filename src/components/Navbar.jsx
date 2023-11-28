import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="max-w-[1649px] mx-auto flex justify-between items-center p-4">
      {/* left Side */}
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 ">
          Gold <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden md:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p>Pickup</p>
        </div>
      </div>

      {/* Search input ... */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent w-full focus:outline-none p-2"
          type="text"
          placeholder="Search food ..."
        />
      </div>

      {/* Shopping Cart  */}
      
        <button className="bg-black text-white hidden md:flex px-2 items-center py-2">
          <BsFillCartFill size={20} className="mr-2"/>
          Cart
        </button>
      
    </div>
  );
};

export default Navbar;
