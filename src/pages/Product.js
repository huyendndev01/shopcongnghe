import React from "react";
import SimpleSlider from "../components/Slider";
import data from "../data/products.json";
import Product from "../components/Product";

const cates = ["TIVI", "PHONE", "LAPTOP", "WATCH"];
const Products = () => {
  return (
    <>
      <div className="hidden sm:block mt-2"> {SimpleSlider()}</div>
      <div className="flex justify-between mt-20 mb-10">
        <div className="border border-[#ccc] w-[20%] p-4 h-[200px]">
          <h2 className="font-bold">Category:</h2>
          <ul className="space-y-3 mt-3 ml-6">
            {cates.map((cate, id) => (
              <li
                className="w-20 px-2 cursor-pointer border border-black hover:border-red-300 hover:bg-red-400 hover:text-white text-center"
                key={id}
              >
                {cate}
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-[#ccc] w-[79%] p-4 h-auto">
          <div className="grid grid-cols-3 gap-3">
            {data.map((pro) => (
              <Product
                id={pro.id}
                name={pro.name}
                price={pro.price}
                thumbnail={pro.thumbnail}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
