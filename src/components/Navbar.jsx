import React, {useState} from "react";
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from 'react-icons/md';
import { FaUserFriends,FaWallet } from 'react-icons/fa'


const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1649px] mx-auto flex justify-between items-center p-4">
      {/* left Side */}
      <div className="flex items-center ">
        <div onClick={() => setNav(!nav)}
         className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-4 ">
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
          placeholder="Search foods ..."
        />
      </div>

      {/* Shopping Cart  */}

      <button className="bg-black text-white hidden md:flex px-2 items-center py-2 rounded-full hover:bg-gray-500">
        <BsFillCartFill size={20} className="mr-2" />
        Cart
      </button>
      
      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
 : ''}

      {/*  side Drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[275px] h-screen bg-white z-10 duration-300':"fixed top-0 left-[-100%] w-[275px] h-screen bg-white z-10 duration-300" }>
        <AiOutlineClose onClick={() => setNav(!nav)}
          size={25}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-3xl p-3">
          Gold <span className="font-bold">Eats</span>
        </h2>

        <nav>
          <ul className="flex flex-col p-4 text-gray-00">
            <li className="text-xl py-3 flex">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="text-xl py-3 flex">
              <MdFavorite size={25} className="mr-4" />
              Favorites
            </li>
            <li className="text-xl py-3 flex">
              <FaWallet size={25} className="mr-4" />
              Wallet
            </li>
            <li className="text-xl py-3 flex">
              <MdHelp size={25} className="mr-4" />
              Help
            </li>

            <li className="text-xl py-3 flex">
              <AiFillTag size={25} className="mr-4" />
              Promotion
            </li>
            <li className="text-xl py-3 flex">
              <BsFillSaveFill size={25} className="mr-4" />
              Best One
            </li>
            <li className="text-xl py-3 flex">
              <FaUserFriends size={25} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
