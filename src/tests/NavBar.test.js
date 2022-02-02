import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

describe('NavBar', () => {
  test('renders the NavBar component', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    const brandText = 'My Shop';
    expect(screen.getByText(brandText)).toBeInTheDocument();

    const logoImage = screen.getByRole('img');
    expect(logoImage).toBeInTheDocument();
  });
});
