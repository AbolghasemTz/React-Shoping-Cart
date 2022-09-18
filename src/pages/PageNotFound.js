import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const PageNotFound = () => {
  return (
    <div className="min-h-screen text-center">
      <h1 className="mt-28 mb-10 font-bold text-3xl">Page Not Fond</h1>
      <div
        className="flex items-center justify-center bg-green-600 w-36 mx-auto 
       text-white py-1 rounded-lg hover:bg-green-800 cursor-pointer transition-all duration-300"
      >
        <Link to="/products" className="text-bold  text-sm pr-2">
          go to shop
        </Link>
        <FaArrowRight size={13} />
      </div>
    </div>
  );
};

export default PageNotFound;
