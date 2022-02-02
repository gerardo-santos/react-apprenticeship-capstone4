import { useState } from 'react';
import { ProductFiltersContainer } from './styles/ProductFiltersContainer.styled';
import ListGroup from 'react-bootstrap/ListGroup';
import productCategoriesData from '../mocks/en-us/product-categories.json';

const ProductFilters = () => {
  const [productCategories, setProductCategories] = useState(() => {
    return productCategoriesData.results.map((category) => ({
      ...category,
      active: false,
    }));
  });

  const toggleCategory = (id) => {
    const modifiedCategories = productCategories.map((category) =>
      category.id === id ? { ...category, active: !category.active } : category
    );
    setProductCategories(modifiedCategories);
  };
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

export default ProductFilters;
