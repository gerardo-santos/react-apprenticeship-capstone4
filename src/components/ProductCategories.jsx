import ProductCard from './ProductCard';
import { SectionTitle } from './styles/SectionTitle.styled';
import { CardContainer } from './styles/CardContainer.styled';
import productCategoriesData from '../mocks/en-us/product-categories.json';

const ProductCategories = () => {
  const productCategories = productCategoriesData.results;
  return (
    <section>
      <SectionTitle>Product Categories</SectionTitle>
      <CardContainer>
        {productCategories.map((productCategory) => (
          <ProductCard
            key={productCategory.id}
            name={productCategory.data.name}
            image={productCategory.data.main_image.url}
            buttonText="Go to category"
          />
        ))}
      </CardContainer>
    </section>
  );
};

export default ProductCategories;
