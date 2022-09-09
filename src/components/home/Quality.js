import banner from "../../assets/images/bannerbeer.jpg";
import beerOne from "../../assets/images/beer1.png";
import iconOne from "../../assets/images/iconBeer.png";
import iconTwo from "../../assets/images/icon2.png";
import iconThree from "../../assets/images/icon3.png";
import iconFour from "../../assets/images/icon4.png";
const Quality = () => {
  return (
    <div
      style={{
        backgroundImage: `URL(${banner})`,
      }}
      className="h-[750px] md:h-[560px] py-5"
    >
      <div className=" w-full">
        <div className="grid md:grid-cols-12 px-8 md:px-0 md:max-w-screen-lg mx-auto ">
          <div className="flex justify-center py-2 md:col-span-3 md:row-span-3">
            <img src={beerOne} alt="banner" className="w-24 md:w-80 " />
          </div>
          <div className="grid md:col-span-9 md:grid-cols-6">
            <div className="flex items-start md:mx-2 p-1 mb-4 border-dotted border-b-2 md:col-span-3 border-gray-300">
              <div>
                <img src={iconOne} alt="icons" className="w-24" />
              </div>
              <div className="pl-4 pb-3">
                <h4 className="font-bold text-lg md:text-xl pb-4 text-orange-500 ">
                  Quality Hops
                </h4>
                <p className="text-xs md:text-base text-white">
                  Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                  Morbi fringilla accumsan augue. Vivamus sit amet velit in dui
                  congue laoreet varius felis. Nam aliquet tincidunt ante
                </p>
              </div>
            </div>
            <div className="flex items-start  p-1 mb-4 border-dotted border-b-2 md:col-span-3 border-gray-300">
              <div>
                <img src={iconTwo} alt="icons" className="w-16" />
              </div>
              <div className="pl-4 pb-3">
                <h4 className="font-bold text-lg md:text-xl pb-4 text-orange-500 ">
                  Quality Barley
                </h4>
                <p className="text-xs md:text-base text-white">
                  Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                  Morbi fringilla accumsan augue. Vivamus sit amet velit in dui
                  congue laoreet varius felis. Nam aliquet tincidunt ante
                </p>
              </div>
            </div>

            <div className="flex items-start  p-1 mb-4 border-dotted border-b-2 md:col-span-3 border-gray-300">
              <div>
                <img src={iconFour} alt="icons" className="w-24" />
              </div>
              <div className="pl-4 pb-3">
                <h4 className="font-bold text-lg md:text-xl pb-4 text-orange-500 ">
                  Pure Water Quality
                </h4>
                <p
                  className="text-xs md:text-base
                   text-white"
                >
                  Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                  Morbi fringilla accumsan augue. Vivamus sit amet velit in dui
                  congue laoreet varius felis. Nam aliquet tincidunt ante
                </p>
              </div>
            </div>
            <div className="flex items-start md:mx-2 mb-4 border-dotted border-b-2 md:col-span-3 border-gray-300">
              <div>
                <img src={iconThree} alt="icons" className="w-24" />
              </div>
              <div className="pl-4 pb-3">
                <h4 className="font-bold text-lg md:text-xl pb-4 text-orange-500 ">
                  Scrumptious Taste
                </h4>
                <p className="text-xs md:text-base text-white">
                  Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                  Morbi fringilla accumsan augue. Vivamus sit amet velit in dui
                  congue laoreet varius felis. Nam aliquet tincidunt ante
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
