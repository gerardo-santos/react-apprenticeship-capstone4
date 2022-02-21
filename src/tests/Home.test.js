import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import Home from '../pages/Home';

describe('Home', () => {
  const initialDefaultState = {
    query: '',
    search: '',
    cart: [],
    selectedCategory: '',
  };

  test('renders the Home component', () => {
    render(
      <GlobalContext.Provider value={initialDefaultState}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </GlobalContext.Provider>
    );
  });
});
