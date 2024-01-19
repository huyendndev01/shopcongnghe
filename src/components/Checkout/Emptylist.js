import React from "react";
import { useNavigate } from "react-router-dom";

const Emptylist = () => {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <div className="m-auto w-[70%] bg-[#f0f0f0] h-60 text-center space-y-5 my-20">
        <i className="mt-10 text-3xl cursor-pointer text-red-500 fa-solid fa-cart-arrow-down"></i>
        <p className="text-black text-xl">
          Chưa có sản phẩm nào trong giỏ hàng.
        </p>
        <button
          className="text-blue-500 p-4 font-bold border border-blue-400"
          onClick={() => navigate("/product")}
        >
          QUAY TRỞ LẠI CỬA HÀNG
        </button>
      </div>
    </div>
  );
};

export default Emptylist;
