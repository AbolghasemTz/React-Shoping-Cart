import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const CategoryDesktop = ({ FilterABV, FilterPH, abv, ph }) => {
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
          className={` bg-gray-200 flex flex-col items-start mt-2 px-3 rounded-xl pb-4 py-2 ${
            isShow ? "block" : "hidden"
          }`}
        >
          <div className="py-3">
            <button
              onClick={FilterABV}
              className={`text-xs font-bold py-1 px-2 ${
                abv && "focus:bg-green-600  focus:rounded-md text-white"
              }`}
            >
              High Alcohol (ABV › 6.0%)
            </button>
          </div>
          <div className="py-3">
            <button
              onClick={FilterPH}
              className={`text-xs font-bold py-1 px-2 ${
                ph && "focus:bg-green-600  focus:rounded-md text-white"
              }`}
            >
              High Acidity (pH ‹ 5.0%)
            </button>
          </div>
          <div className="py-2"></div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDesktop;
