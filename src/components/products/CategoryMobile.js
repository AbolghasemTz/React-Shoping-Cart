import { Link } from "react-router-dom";

const CategoryMobile = () => {
  return (
    <div className=" bg-gray-200 md:hidden overflow-auto rounded-xl  flex justify-evenly">
      <div className="py-2">
        <Link
          to="#"
          className="font-bold text-xs   border border-gray-600 rounded-full px-2  py-1 bg-white"
        >
          All products
        </Link>
      </div>
      <div className="py-2">
        <Link
          to="#"
          className="font-bold text-xs   border border-gray-600 rounded-full px-2  py-1 bg-white"
        >
          beers
        </Link>
      </div>
      <div className="py-2">
        <Link
          to="#"
          className="font-bold text-xs   border border-gray-600 rounded-full px-2  py-1 bg-white"
        >
          wisky
        </Link>
      </div>
    </div>
  );
};

export default CategoryMobile;
