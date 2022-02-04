import featuredProductsData from '../mocks/en-us/featured-products.json';
import { SectionTitle } from './styles/SectionTitle.styled';
import { CardContainer } from './styles/CardContainer.styled';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
      <Button
        variant="danger"
        style={{ marginLeft: '15px', marginBlock: '15px' }}
        as={Link}
        to="/product-list"
      >
        View all products
      </Button>
    </section>
  );
};

export default FeaturedProducts;
