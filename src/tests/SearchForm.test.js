import { render } from '@testing-library/react';
import { GlobalContext } from '../context/GlobalContext';
import { BrowserRouter } from 'react-router-dom';
import SearchForm from '../components/SearchForm';

describe('SearchForm', () => {
  test('renders the SearchForm component', () => {
    const initialDefaultState = {
      query: '',
      search: '',
      cart: [],
      selectedCategory: '',
    };
    const { getByPlaceholderText, getByRole } = render(
      <GlobalContext.Provider value={initialDefaultState}>
        <BrowserRouter>
          <SearchForm />
        </BrowserRouter>
      </GlobalContext.Provider>
    );
    const searchInput = getByPlaceholderText('Search');
    expect(searchInput).toBeInTheDocument();
    const searchBtn = getByRole('button');
    expect(searchBtn).toBeInTheDocument();
  });
});
