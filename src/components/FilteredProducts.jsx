import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { FilteredProductsContainer } from './styles/FilteredProductsContainer.styled';
import ProductCard from '../components/ProductCard';
import PropTypes from 'prop-types';

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
            buttonText="Go to product"
            productListPage={true}
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
