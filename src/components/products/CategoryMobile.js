import { Link } from "react-router-dom";

const CategoryMobile = ({ FilterABV, FilterPH, abv, ph }) => {
  return (
    <div className=" bg-gray-200 md:hidden overflow-auto rounded-xl  flex justify-evenly">
      <div className="py-2">
        <button
          onClick={FilterABV}
          to="#"
          className={`font-bold text-xs   border border-gray-600 rounded-full px-2  py-1  ${
            abv && "focus:bg-green-600  focus:rounded-md text-white"
          }`}
        >
          High Alcohol (ABV › 6.0%)
        </button>
      </div>
      <div className="py-2">
        <button
          onClick={FilterPH}
          className={`font-bold text-xs   border border-gray-600 rounded-full px-2  py-1  ${
            ph && "focus:bg-green-600  focus:rounded-md text-white"
          }`}
        >
          High Acidity (pH ‹ 5.0%)
        </button>
      </div>
    </div>
  );
};

export default CategoryMobile;
