import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import NavBar from '../components/NavBar';

describe('NavBar', () => {
  const initialDefaultState = {
    query: '',
    search: '',
    cart: [],
    selectedCategory: '',
  };

  test('renders the NavBar component', () => {
    render(
      <GlobalContext.Provider value={initialDefaultState}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </GlobalContext.Provider>
    );

    const brandText = 'My Shop';
    expect(screen.getByText(brandText)).toBeInTheDocument();

    const logoImage = screen.getByRole('img');
    expect(logoImage).toBeInTheDocument();
  });
});
