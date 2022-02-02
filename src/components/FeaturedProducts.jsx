import featuredProductsData from '../mocks/en-us/featured-products.json';
import { SectionTitle } from './styles/SectionTitle.styled';
import { CardContainer } from './styles/CardContainer.styled';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const featuredProducts = featuredProductsData.results;
  return (
    <section>
      <SectionTitle>Featured Products</SectionTitle>
      <CardContainer>
        {featuredProducts.map((featuredProduct) => (
          <ProductCard
            key={featuredProduct.id}
            name={featuredProduct.data.name}
            image={featuredProduct.data.mainimage.url}
            buttonText="Go to product"
          />
        ))}
      </CardContainer>
    </section>
  );
};

export default FeaturedProducts;
