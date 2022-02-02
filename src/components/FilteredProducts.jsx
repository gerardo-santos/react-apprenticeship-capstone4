import { FilteredProductsContainer } from './styles/FilteredProductsContainer.styled';
import productsData from '../mocks/en-us/products.json';
import ProductCard from '../components/ProductCard';

const FilteredProducts = () => {
  const products = productsData.results;
  return (
    <FilteredProductsContainer>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.data.name}
          image={product.data.mainimage.url}
          price={product.data.price}
          category={product.data.category.slug}
          buttonText="Go to product"
          productListPage={true}
        />
      ))}
    </FilteredProductsContainer>
  );
};

export default FilteredProducts;
