import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { shorten } from "../utils/helpers/shortenTitle";
import { BiTrash } from "react-icons/bi";
import { addToCart, decrement, remove } from "../store/Products/CartSlice";

const Cart = () => {
  const { cart, total } = useSelector((state) => state.CartState);

  const dispatch = useDispatch();
  const incHandler = (item) => {
    dispatch(addToCart(item));
  };
  const dicHandler = (item) => {
    dispatch(decrement(item));
  };
  const deleteHandler = (item) => {
    dispatch(remove(item));
  };

  const emptyCart = () => {
    if (!cart.length) {
      return (
        <div className="px-4 md:px-0 w-80">
          <p className="pb-6 text-sm text-gray-600 ">
            There are no more items in your cart
          </p>
          <Link
            className="bg-gray-200 px-6 py-3 text-sm font-bold hover:bg-green-500 rounded-md hover:text-white transition-all duration-300"
            to="/products"
          >
            Continue Shopping
          </Link>
        </div>
      );
    }
  };

  return (
    <div className=" bg-gray-50 min-h-screen">
      <div className="pt-36 max-w-screen-xl mx-auto">
        <div className="w-80">
          <h1 className="font-bold pb-8 px-4 md:px-0 ">Shopping Cart</h1>
          {emptyCart()}
        </div>

        <div className=" grid grid-cols-12 gap-8">
          <div className="md:col-span-9 col-span-12">
            {cart.map((item) => {
              return (
                <div key={item.id} className="mb-6 px-4 md:px-0 shadow-sm">
                  <div className="md:flex md:justify-between border border-gray-200 rounded-md py-4 px-4">
                    <div className="flex items-center">
                      <div className="w-6 md:w-5 pb-4 md:pb-0">
                        <img
                          src={item.image_url}
                          alt="cart"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-bold ml-4 text-gray-700">
                          {shorten(item.name)}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center md:w-56">
                      <p className="font-bold text-sm text-gray-700">
                        {item.ibu}$
                      </p>
                      {/* product Handler */}
                      <div className="flex items-center">
                        <button
                          onClick={() => dicHandler(item)}
                          className="bg-white text-gray-600 border rounded-md border-gray-300 px-2 "
                        >
                          <AiOutlineMinus size={13} />
                        </button>
                        <span className="bg-white text-xs text-gray-800 border rounded-full mx-2  px-2 py-1">
                          {item.amount}
                        </span>
                        <button
                          onClick={() => incHandler(item)}
                          className="bg-white  text-gray-600 border rounded-md border-gray-300 px-2"
                        >
                          <AiOutlinePlus size={13} />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-end  pt-4 md:pt-0">
                      <BiTrash
                        size={18}
                        className="text-gray-600 cursor-pointer"
                        onClick={() => deleteHandler(item)}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="md:col-span-3 col-span-12 ">
            <CartPrice cart={cart} total={total} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

const CartPrice = ({ cart, total }) => {
  const totalPrice = cart.length
    ? cart.reduce((acc, cur) => acc + cur.amount * cur.ibu, 0)
    : 0;
  return (
    <div className="bg-white p-2 rounded-md shadow-sm mx-4 md:mx-0">
      <p className="text-gray-600 font-bold text-xs px-2">
        THERE ARE {cart.length} ITEM IN YOUR CART
      </p>
      <div className="py-4">
        <div className="flex items-center justify-between px-2">
          <p className="text-sm">Total products:</p>
          <p className="text-sm font-bold">{totalPrice}$</p>
        </div>
        <div className="flex items-center justify-between my-3 px-2">
          <p className="text-sm">Total Shipping::</p>
          <p className="font-bold text-sm">Free</p>
        </div>
        <hr />
        <div className="flex items-center justify-between my-3 px-2">
          <p className="text-sm">
            TOTAL <sub>(tax incl.)</sub>
          </p>
          <p className="text-sm font-bold">{totalPrice}$</p>
        </div>
        <div className="flex items-center justify-center px-2">
          <Link
            to={`/signup?redirect=checkout`}
            className="bg-gray-200 mt-4 px-6 py-3 text-sm font-bold hover:bg-green-800 rounded-md hover:text-white transition-all duration-300"
          >
            CHECKOUT
          </Link>
        </div>
      </div>
    </div>
  );
};
