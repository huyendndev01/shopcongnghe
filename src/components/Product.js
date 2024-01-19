import React from "react";

const Product = (props) => {
  const { id, name, price, thumbnail } = props;
  return (
    <div className="border border-[#ccc] p-2 cursor-pointer h-auto">
      <h3 className="text-center pb-2">{name}</h3>
      <img src={thumbnail} className="w-[200px] h-[200px] mx-auto" />
      <p className="text-center mt-1">{price} VNĐ</p>
      <div className="flex justify-between items-center mt-2 mx-10">
        <button className="px-2 py-1  text-white hover:bg-red-500 bg-red-600 rounded-lg">
          View
        </button>
        <button className="px-2 py-1 text-white hover:bg-red-500 bg-red-600 rounded-lg">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
