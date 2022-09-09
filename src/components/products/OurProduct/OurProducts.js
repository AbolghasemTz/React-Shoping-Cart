import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOurProducts } from "../../../services/getProdtucts";
import OurProduct from "./OurPeoduct";

const OurProducts = () => {
  const { products, loading, error } = useSelector(
    (state) => state.productState
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOurProducts());
  }, []);
  return (
    <div className=" bg-gray-50">
      <div className="border-b-4 border-green-700 w-32 mx-auto pb-1">
        <h2 className="text-center text-xl font-bold">Our Products</h2>
      </div>
      <div className="grid gap-4 p-10 md:grid-cols-12 md:max-w-screen-xl mx-auto">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error</p>
        ) : (
          products.map((product) => {
            return <OurProduct key={product.id} product={product} />;
          })
        )}
      </div>
    </div>
  );
};

export default OurProducts;