import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../services/getProdtucts';
import CategoryDesctop from '../components/products/CategoryDesctop';
import CategoryMobile from '../components/products/CategoryMobile';
import Pagination from '../layout/Pagination';
import Product from '../components/products/Product';
import Loading from '../components/loader/Loading';
import { apiCfg } from '../utils/constants/api.constants';

const Products = () => {
  const { products, loading, error } = useSelector(state => state.productState);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(apiCfg.products));
  }, []);
  return (
    <>
      <div className=''></div>
      <div className='pt-28 md:pt-36   bg-gray-50'>
        <div className='lg:max-w-screen-xl md:px-5 md:mx-auto'>
          <div className='grid md:grid-cols-12 gap-6'>
            {/* Category Desctop */}
            <CategoryDesctop />
            {/* Categorry Mobile */}
            <CategoryMobile />
            {/* Products */}
            <div className='md:col-span-9 grid grid-cols-6 gap-x-8 gap-y-4  px-10 md:px-0'>
              {loading ? (
                <Loading />
              ) : error ? (
                <h2>{error.message}</h2>
              ) : (
                products.map(product => {
                  return <Product product={product} />;
                })
              )}
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-16 mb-10'>
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default Products;
