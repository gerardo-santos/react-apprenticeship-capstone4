import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import SearchResults from '../pages/SearchResults';

describe('SearchResults', () => {
  const initialDefaultState = {
    query: '',
    search: '',
    cart: [],
    selectedCategory: '',
  };

  test('renders the SearchResults component', () => {
    render(
      <GlobalContext.Provider value={initialDefaultState}>
        <BrowserRouter>
          <SearchResults />
        </BrowserRouter>
      </GlobalContext.Provider>
    );
  });
});
