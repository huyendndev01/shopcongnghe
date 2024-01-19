import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-height-home w-full bg-[#f0f0f0]">
      <div className="text-center bg-white p-28 shadow-inner rounded-lg">
        <div>
          <h2 className="text-2xl bg-gradient-to-r from-yellow-400 via-red-500 to-indigo-400 block text-transparent bg-clip-text">
            Chào mừng bạn đến với <strong>SHOPCONGNGHE.COM</strong>
          </h2>
          <button
            className="text-center text-white mt-6 px-4 py-2 bg-red-600 hover:bg-red-500 rounded-xl"
            onClick={() => navigate("/product")}
          >
            Khám phá ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
