import { useState } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import ProductCard from '../components/ProductCard';
import { FilteredProductsContainer } from './styles/FilteredProductsContainer.styled';

const FilteredProducts = ({ filteredProducts }) => {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  if (isLoading) {
    return (
      <div style={{ marginLeft: '10%', marginTop: '20%' }}>
        <h1>Loading...</h1>;
        <Spinner animation="border" variant="danger" />
      </div>
    );
  }
  return (
    <FilteredProductsContainer>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.data.name}
            image={product.data.mainimage.url}
            price={product.data.price}
            category={product.data.category.slug}
            buttonText="Add to cart"
            isProduct={true}
          />
        ))
      ) : (
        <Alert style={{ width: '90%' }}>No products were found</Alert>
      )}
    </FilteredProductsContainer>
  );
};

FilteredProducts.propTypes = {
  filteredProducts: PropTypes.array,
};

export default FilteredProducts;
