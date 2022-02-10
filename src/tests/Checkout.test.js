import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import Checkout from '../pages/Checkout';

describe('Checkout', () => {
  const initialDefaultState = {
    query: '',
    search: '',
    cart: [],
    selectedCategory: '',
  };

  test('renders the Checkout component', () => {
    render(
      <GlobalContext.Provider value={initialDefaultState}>
        <BrowserRouter>
          <Checkout />
        </BrowserRouter>
      </GlobalContext.Provider>
    );

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent('Checkout');
  });
});
