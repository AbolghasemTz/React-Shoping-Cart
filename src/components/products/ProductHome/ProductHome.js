import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../store/Products/CartSlice";
import { Link } from "react-router-dom";
import { checkInCart } from "../../../utils/helpers/helpers";
import ProductsItem from "../ProductsItem";
import { notify } from "../../../utils/tostify";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const ProductHome = ({ product }) => {
  const { cart } = useSelector((state) => state.CartState);
  const dispatch = useDispatch();

  const addHandler = (product) => {
    notify("Insert To Cart", "success");
    dispatch(addToCart(product));
  };

  return (
    <div className="md:col-span-4 col-span-2 border py-3 px-2 border-gray-300 rounded-lg hover:shadow-xl transition-all duration-300  text-center h-auto bg-white relative">
      <ProductsItem product={product} cart={cart} />
      <div>
        {checkInCart(cart, product.id) ? (
          <Link
            className="bg-gray-200 px-16 py-2 rounded-full hover:bg-green-600 w-full
          hover:text-white text-xs font-bold transition-all duration-300 ease-linear border-none outline-none"
            to="/cart"
          >
            Check In Cart
          </Link>
        ) : (
          <button
            className="bg-gray-200 px-16 py-2 rounded-full hover:bg-green-600 w-50
 hover:text-white text-xs font-bold transition-all duration-300 ease-linear border-none outline-none"
            onClick={() => addHandler(product)}
          >
            ADD TO CART
          </button>
        )}
      </div>
      <div className="absolute top-3 left-3">
        {checkInCart(cart, product.id) ? (
          <AiFillStar className="text-yellow-300" size={22} />
        ) : (
          <AiOutlineStar className="text-yellow-300" size={22} />
        )}
      </div>
    </div>
  );
};

export default ProductHome;
