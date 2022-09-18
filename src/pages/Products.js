import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../services/getProducts";
import CategoryDesktop from "../components/products/CategoryDesktop";
import CategoryMobile from "../components/products/CategoryMobile";
import Product from "../components/products/Product";
import Loading from "../utils/Loading";
import { apiCfg } from "../utils/constants/api.constants";
import Pagination from "@mui/material/Pagination";

const Products = () => {
  const [abv, setAbv] = useState(false);
  const [ph, setPh] = useState(false);
  const { products, loading, error } = useSelector(
    (state) => state.productState
  );

  const FilterABV = () => {
    setAbv(!abv);
  };
  const FilterPH = () => {
    setPh(!ph);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(apiCfg.products));
  }, []);

  const filterResult = products.filter((result) => {
    let beerHasMatched = true;

    if (abv) {
      beerHasMatched = beerHasMatched && result.abv > 6;
    }

    if (ph) {
      beerHasMatched = beerHasMatched && result.ph < 4.2;
    }
    return beerHasMatched;
  });

  return (
    <>
      <div className="pt-28 md:pt-36 bg-gray-50">
        <div className="lg:max-w-screen-xl md:px-5 md:mx-auto">
          <div className="grid md:grid-cols-12 gap-6">
            {/* Category Desktop */}
            <CategoryDesktop
              FilterABV={FilterABV}
              FilterPH={FilterPH}
              abv={abv}
              ph={ph}
            />
            {/* Category Mobile */}
            <CategoryMobile
              FilterABV={FilterABV}
              FilterPH={FilterPH}
              abv={abv}
              ph={ph}
            />
            {/* Products */}
            <div className="md:col-span-9 grid grid-cols-6 gap-x-8 gap-y-4  px-10 md:px-0">
              {loading ? (
                <Loading />
              ) : error ? (
                <h2>{error.message}</h2>
              ) : (
                filterResult.map((product) => {
                  return <Product key={product.id} product={product} />;
                })
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16 mb-10">
          <Pagination count={3} color="primary" />
        </div>
      </div>
    </>
  );
};

export default Products;
