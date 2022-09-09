import { Link } from "react-router-dom";

import categoryOne from "../../assets/images/categoryOne.avif";

const Category = () => {
  return (
    <div className=" mx-auto p-10 md:p-0 bg-gray-50">
      <div className="grid md:grid-cols-12 md:gap-4 gap-y-4 md:max-w-screen-lg mx-auto">
        {["Beer Cans", "Bottle Beer", "Beer Keg ( 20L - 30L )"].map(
          (category) => {
            return (
              <div
                key={category}
                className="md:col-span-4 relative top-[-80px] md:row-span-full rounded-xl text-center p-5 bg-white shadow-2xl h-auto"
              >
                <div className="flex justify-center py-3">
                  <img
                    src={categoryOne}
                    alt="category"
                    className="object-cover "
                  />
                </div>
                <div>
                  <h3 className="font-bold text-2xl">{category}</h3>
                  <p
                    className="
      text-sm py-5"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipis cing elit.
                    Curabitu libero, varius id sodales a convalli Morbi ipsum
                    sem vestibuluma porttitor.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    to="#"
                    className="bg-green-600 px-3 py-2 text-white font-bold text-sm hover:bg-orange-500 transition-all duration-300 rounded-2xl"
                  >
                    View More
                  </Link>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Category;
