import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';
import { ProductFiltersContainer } from './styles/ProductFiltersContainer.styled';

const ProductFilters = ({ toggleCategory, productCategories }) => {
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
      </ListGroup>
    </ProductFiltersContainer>
  );
};

ProductFilters.propTypes = {
  toggleCategory: PropTypes.func,
  productCategories: PropTypes.array,
};

export default ProductFilters;
