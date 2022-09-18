import React from "react";
import { checkInCart } from "../../utils/helpers/helpers";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const ProductsItem = ({ product, cart }) => {
  return (
    <React.Fragment>
      <div className="w-[50px] h-[150px] mx-auto">
        <img
          src={product.image_url}
          alt="products"
          className="w-full h-full pt-1 "
        />
      </div>
      <div className="py-4 text-center">
        <h3 className="pt-4 text-sm font-bold">{product.name}</h3>
        <p className="py-3 text-gray-800 font-bold">{product.ibu}$</p>
      </div>
      <div className="absolute top-3 left-3">
        {checkInCart(cart, product.id) ? (
          <AiFillStar className="text-yellow-300" size={22} />
        ) : (
          <AiOutlineStar className="text-yellow-300" size={22} />
        )}
      </div>
    </React.Fragment>
  );
};

export default ProductsItem;
