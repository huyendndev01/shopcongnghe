import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="h-16 text-white flex justify-between items-center bg-[#da0000] px-2 fixed top-0 right-0 left-0 z-10">
        <div className="font-bold text-2xl ">
          <Link
            to="/"
            className="bg-gradient-to-r from-yellow-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
          >
            SHOPCONGNGHE
          </Link>
        </div>
        <ul className="flex justify-between items-center gap-5 cursor-pointer">
          <li className="p-3 rounded-sm hover:bg-red-700 hover:text-white">
            <Link to="/">Trang chủ</Link>
          </li>
          <li className="p-3 rounded-sm hover:bg-red-700 hover:text-white">
            <Link to="/product">Sản Phẩm</Link>
          </li>
          <li className="p-3 rounded-sm hover:bg-red-700 hover:text-white">
            <Link to="/contact">Liên hệ</Link>
          </li>
        </ul>
        <div className="space-x-3 mr-4">
          <Link to="/login">
            <i class="fa-solid fa-user"></i>
          </Link>
          <Link to="/checkout" className="relative">
            <i class="fa-solid fa-cart-plus"></i>
            <span className="text-white px-[7px] rounded-full bg-red-700 absolute top-[-10px] right-[-17px]">
              0
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
