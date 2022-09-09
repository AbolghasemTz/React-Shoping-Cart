import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Banner2 from '../../assets/images/bannerTow.webp';
import imageMenu from '../../assets/images/imagemenu.png';
import listMenu from '../../assets/images/listMenu.webp';
import { getProducts } from '../../services/getProdtucts';
import { apiCfg } from '../../utils/constants/api.constants';

const Menu = () => {
  const { products } = useSelector(state => state.productState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(apiCfg.home));
  }, []);
  return (
    <div>
      <div
        style={{
          backgroundImage: `URL(${Banner2})`,
        }}
        className='md:h-[600px] h-[980px] md:py-14'
      >
        <div className='px-10'>
          <div className='grid md:grid-cols-12 md:gap-x-5 gap-y-4 md:gap-y-0 max-w-screen-lg mx-auto'>
            <div className='col-span-6 h-[280px] md:h-auto'>
              <div className='text-center'>
                <h2 className='font-bold text-white text-[4rem] pb-2 md:pb-6 line-through'>
                  MENU
                </h2>

                <span className='text-white tracking-[.6rem]'>
                  Oktoberfest Party
                </span>
                <p className='md:text-sm text-xs text-white md:py-8 py-4 leading-6'>
                  Oktoberfest, annual festival in Munich, Germany, held over a
                  two-week period and ending on the first Sunday in October. The
                  festival originated on October 12, 1810, in celebration of the
                  marriage of the crown prince of Bavaria, who later became King
                  Louis I, to Princess Therese von Sachsen-Hildburghausen.
                </p>
              </div>
              <div className='flex justify-center items-center'>
                <img
                  src={imageMenu}
                  alt='Icon Menu'
                  className='md:w-52 w-32 md:pt-6'
                />
              </div>
            </div>
            <div className='col-span-6 h-[340px] md:h-auto mt-36 md:mt-0'>
              <div
                style={{
                  backgroundImage: `URL(${listMenu})`,
                }}
                className='h-[480px]'
              >
                <div className='py-6 px-4'>
                  {products &&
                    products.map(item => {
                      return (
                        <div key={item.id}>
                          <div>
                            <div>
                              <div className='flex items-center justify-between'>
                                <p className='font-bold pt-2'>{item.name}</p>
                                <p className='text-orange-500 font-bold'>
                                  {item.ibu}$
                                </p>
                              </div>
                              <span className='text-sm text-gray-600 pb-6 block border-b border-dashed border-blue-900'>
                                {item.tagline}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
