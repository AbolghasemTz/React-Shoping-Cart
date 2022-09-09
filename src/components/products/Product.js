import { Link } from "react-router-dom";
import ProductsItem from "../../components/products/ProductsItem";
import { addToCart } from "../../features/Products/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { checkInCart } from "../../utils/checkInCart";
import { notify } from "../toastify/tostify";

const Product = ({ product }) => {
  const { cart } = useSelector((state) => state.CartState);

  const dispatch = useDispatch();
  const addHandler = (product) => {
    notify("Insert To Cart", "success");
    dispatch(addToCart(product));
  };
  return (
    <div className="bg-white shadow-md rounded-lg lg:col-span-2 md:col-span-3 col-span-6 h-[340px] relative">
      <ProductsItem product={product} cart={cart} />
      <div className="flex justify-center items-center px-4">
        <div>
          {checkInCart(cart, product.id) ? (
            <Link
              className="bg-gray-200 px-4 py-2 rounded-full hover:bg-green-600 w-full
hover:text-white text-xs font-bold transition-all duration-300 ease-linear border-none outline-none"
              to="/cart"
            >
              Check In Cart
            </Link>
          ) : (
            <button
              className="bg-gray-200 px-4 py-2 rounded-full hover:bg-green-600 w-50
hover:text-white text-xs font-bold transition-all duration-300 ease-linear border-none outline-none"
              onClick={() => addHandler(product)}
            >
              ADD TO CART
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
