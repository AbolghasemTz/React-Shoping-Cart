import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../src/services/getProdtucts';
import { apiCfg } from '../utils/constants/api.constants';

const Pagination = () => {
  const { products, loading, error } = useSelector(state => state.productState);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function goToPage(selectedPage) {
    dispatch(
      getProducts({
        per_page: apiCfg.products.per_page,
        page: selectedPage,
      })
    );
    setPage(selectedPage);
    navigate({
      pathname: '/products',
      search: '?sort=date&order=newest',
    });
  }

  return (
    <nav aria-label='Page navigation example'>
      <ul className='inline-flex -space-x-px'>
        <li>
          <Link
            to='#'
            className='py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            onClick={() => goToPage(page - 1)}
          >
            Previous
          </Link>
        </li>
        {Array.from({ length: page }, (_, i) => i + 1).map(page => (
          <li>
            <Link
              to='#'
              className='py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              onClick={() => goToPage(page)}
            >
              {page}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to='#'
            className='py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            onClick={() => goToPage(page + 1)}
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
