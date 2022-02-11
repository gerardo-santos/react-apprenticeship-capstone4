import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import { ProductFiltersContainer } from './styles/ProductFiltersContainer.styled';

const ProductFilters = ({
  toggleCategory,
  productCategories,
  clearAllFilters,
}) => {
  return (
    <ProductFiltersContainer>
      <ListGroup as="div">
        {productCategories.map((category) => (
          <ListGroup.Item
            key={category.id}
            as="button"
            action
            variant="danger"
            active={category.active}
            onClick={() => toggleCategory(category.id)}
          >
            {category.data.name}
          </ListGroup.Item>
        ))}
        <ListGroup.Item
          variant="primary"
          as="button"
          action
          onClick={clearAllFilters}
        >
          Clear filters
        </ListGroup.Item>
      </ListGroup>
    </ProductFiltersContainer>
  );
};

ProductFilters.propTypes = {
  toggleCategory: PropTypes.func,
  productCategories: PropTypes.array,
  clearAllFilters: PropTypes.func,
};

export default ProductFilters;
