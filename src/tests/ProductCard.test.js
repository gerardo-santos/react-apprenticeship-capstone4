import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import ProductCard from '../components/ProductCard';

describe('Checkout', () => {
  const initialDefaultState = {
    query: '',
    search: '',
    cart: [],
    selectedCategory: '',
  };

  const id = 'my-id';
  const name = 'super big bed';
  const url = 'product/my-id';
  const image = 'https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg';
  const price = 100;
  const category = 'furniture';
  const buttonText = 'add to card';
  const isProduct = true;

  test('renders the ProductCard component', () => {
    render(
      <GlobalContext.Provider value={initialDefaultState}>
        <BrowserRouter>
          <ProductCard
            id={id}
            name={name}
            url={url}
            image={image}
            price={price}
            category={category}
            buttonText={buttonText}
            isProduct={isProduct}
          />
        </BrowserRouter>
      </GlobalContext.Provider>
    );
    expect(screen.getByText('super big bed')).toBeInTheDocument();
  });
});
