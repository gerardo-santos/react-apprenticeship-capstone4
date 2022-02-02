import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer', () => {
  test('renders the Footer component', () => {
    render(<Footer />);
    const footerText =
      'Ecommerce created during Wizeline’s Academy React Bootcamp';
    expect(screen.getByText(footerText)).toBeInTheDocument();
  });
});
