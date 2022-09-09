import { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useSelector((state) => state.CartState);

  return (
    <>
      <nav className="bg-green-500 border-gray-200 px-2 z-40  md:px-4 py-4 shadow-sm fixed right-0 top-0 w-full">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="https://flowbite.com" className="flex items-center">
            <span className="self-center text-orange-500 text-xl font-semibold whitespace-nowrap dark:text-white">
              <img
                src={logo}
                alt="Logo Beer"
                className="w-16 h-16 rounded-full"
              />
            </span>
          </Link>
          <div className="flex items-center md:order-2">
            <Link
              to="#"
              className="text-white hover:bg-gray-50 hover:text-gray-600 focus:ring-3 focus:ring-gray-300 font-sm rounded-lg text-md px-2 py-1 md:px-4 md:py-2 mr-1 md:mr-2 focus:outline-none transition-all duration-300"
            >
              Login
            </Link>
            <div>
              <Link
                to="/cart"
                className=" text-orange-500 hover:text-white text-md px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 transition-all duration-300"
              >
                <FaShoppingBasket size={24} className="relative" />
              </Link>
              <span className="absolute top-6 right-12 md:right-8 bg-white rounded-full text-sm w-4 h-4 flex justify-center items-center">
                {cart.length}
              </span>
            </div>
            <button
              data-collapse-toggle="mega-menu-icons"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mega-menu-icons"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-white hover:text-gray-700"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            id="mega-menu-icons"
            className={`${
              isOpen ? "block" : "hidden"
            } justify-between items-center w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="flex flex-col mt-4 text-sm font-medium md:flex-row md:space-x-8 md:mt-0">
              <li>
                <Link
                  to="/"
                  className="text-white block py-2 pr-4 pl-3 hover:text-orange-400 border-b border-gray-100 transition-all duration-200 ease-in hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  id="mega-menu-icons-dropdown-button"
                  data-dropdown-toggle="mega-menu-icons-dropdown"
                  className="text-white flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium transition-all duration-200 ease-in hover:text-orange-400 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
