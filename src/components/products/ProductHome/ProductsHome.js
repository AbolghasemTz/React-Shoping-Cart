import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../services/getProducts";
import ProductHome from "./ProductHome";
import { apiCfg } from "../../../utils/constants/api.constants";

const ProductsHome = () => {
  const { products, loading, error } = useSelector(
    (state) => state.productState
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(apiCfg.home));
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
            return <ProductHome key={product.id} product={product} />;
          })
        )}
      </div>
    </div>
  );
};

export default ProductsHome;
