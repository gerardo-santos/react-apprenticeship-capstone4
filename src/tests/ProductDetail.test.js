import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import ProductDetail from '../pages/ProductDetail';

describe('ProductDetail', () => {
  const initialDefaultState = {
    query: '',
    search: '',
    cart: [],
    selectedCategory: '',
  };

  test('renders the ProductDetail component', () => {
    render(
      <GlobalContext.Provider value={initialDefaultState}>
        <BrowserRouter>
          <ProductDetail />
        </BrowserRouter>
      </GlobalContext.Provider>
    );
  });
});
