import { Link } from "react-router-dom";
import footerImage from "../assets/images/footer.webp";
import { FaInstagram, FaTelegram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          backgroundImage: `URL(${footerImage})`,
        }}
        className="h-auto md:h-[600px]"
      >
        <div className="pt-[14rem] ">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <h3 className="font-bold tracking-widest text-white text-[3rem] pb-3">
                Newsletter
              </h3>
              <p className="text-xs tracking-wide text-white pb-4">
                SIGN UP FOR NEWSLETTER TO RECEIVE SPECIAL OFFERS AND EXCLUSIVE
                NEWS ABOUT TEE PRODUCTS
              </p>
            </div>
            <div>
              <input
                placeholder="ENTER YOUR EMAIL"
                className="border-none outline-none px-3 py-2 md:w-96 w-64 rounded-2xl placeholder:text-[11px] placeholder:text-gray-500"
              />
              <button className="border-none outline-none px-6 py-3 rounded-2xl relative right-8 text-white text-xs  bg-green-700 hover:bg-orange-500 transition-all duration-300">
                SUBSCRIBE
              </button>
            </div>
          </div>

          <div className="md:flex md:justify-around  md:max-w-screen-xl mx-auto py-8 pl-8 md:pl-0  ">
            <div className=" ">
              <div className="pb-4">
                <p className="text-white pb-1 text-sm">
                  Call Customer Services, We Support 24/7 :
                </p>
                <span className="text-white text-lg font-bold">
                  84-0123-456-789
                </span>
              </div>
              <div>
                <p className="text-white pb-1 text-sm">Address :</p>
                <span className="text-white">
                  PO Box 1622 Vissaosang Street West:
                </span>
              </div>
            </div>
            <div className=" ">
              <h3 className="text-gray-200 font-bold md:pb-3 pt-3 pb-2  border-b mr-4 md:mr-0 md:pt-0">
                CUSTOMER SERVICE
              </h3>
              <div className="pb-3 pt-1">
                <Link
                  to="#"
                  className="text-white hover:text-gray-200  transition-all duration-300 text-sm"
                >
                  Contact Us
                </Link>
              </div>
              <div className="pb-3">
                <Link
                  to="#"
                  className="text-white hover:text-gray-200 transition-all duration-300 text-sm"
                >
                  Peoducts
                </Link>
              </div>
              <div className="pb-3">
                <Link
                  to="#"
                  className="text-white hover:text-gray-200 transition-all duration-300 text-sm"
                >
                  Help and advice
                </Link>
              </div>
            </div>
            <div className=" ">
              <h3 className="text-gray-200 font-bold pb-2  border-b mr-4 md:mr-0">
                Social
              </h3>
              <div className="md:pt-4 flex pt-2 items-center">
                <Link className="pr-8 " to="#">
                  <FaInstagram
                    className="text-gray-200  hover:text-gray-400 transition-all duration-300"
                    size={24}
                  />
                </Link>
                <Link className="pr-8 " to="#">
                  <FaTelegram
                    className="text-gray-200  hover:text-gray-400 transition-all duration-300"
                    size={24}
                  />
                </Link>
                <Link className="" to="#">
                  <FaLinkedinIn
                    className="text-gray-200  hover:text-gray-400 transition-all duration-300"
                    size={24}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
