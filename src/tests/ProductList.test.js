import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import ProductList from '../pages/ProductList';

describe('ProductList', () => {
  const initialDefaultState = {
    query: '',
    search: '',
    cart: [],
    selectedCategory: '',
  };

  test('renders the ProductList component', () => {
    render(
      <GlobalContext.Provider value={initialDefaultState}>
        <BrowserRouter>
          <ProductList />
        </BrowserRouter>
      </GlobalContext.Provider>
    );
  });
});
