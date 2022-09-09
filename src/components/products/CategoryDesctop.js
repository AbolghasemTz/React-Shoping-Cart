import { useState } from "react";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";

const CategoryDesctop = () => {
  const [isShow, setIsShow] = useState(true);
  return (
    <div className="hidden md:block md:shadow-sm  md:col-span-3 ">
      <div>
        <div
          onClick={() => setIsShow(!isShow)}
          className="bg-green-500 rounded-full px-6 py-2 flex justify-between items-center cursor-pointer"
        >
          <span className="text-white font-bold text-sm">Category</span>
          <BiChevronDown
            size={25}
            className={`text-white ${
              isShow ? "rotate-180" : "rotate-0"
            } transition-all duration-300`}
          />
        </div>
        <div
          className={` bg-gray-200 mt-2 px-3 rounded-xl pb-4 py-2 ${
            isShow ? "block" : "hidden"
          }`}
        >
          <div className="py-2">
            <Link to="#" className="font-bold text-sm">
              All products
            </Link>
          </div>
          <div className="py-2">
            <Link to="#" className="font-bold text-sm">
              beers
            </Link>
          </div>
          <div className="py-2">
            <Link to="#" className="font-bold text-sm">
              wisky
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDesctop;
