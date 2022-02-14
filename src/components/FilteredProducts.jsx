import PropTypes from 'prop-types';

import Alert from 'react-bootstrap/Alert';
import ProductCard from '../components/ProductCard';
import { FilteredProductsContainer } from './styles/FilteredProductsContainer.styled';

const FilteredProducts = ({ filteredProducts }) => {
  return (
    <FilteredProductsContainer>
      {filteredProducts && filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.data.name}
            url={`../product/${product.id}`}
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
