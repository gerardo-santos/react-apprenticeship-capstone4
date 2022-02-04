import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import ProductCard from './ProductCard';
import { useFeaturedProducts } from '../utils/hooks/useFeaturedProducts';
import { SpinnerContainer } from './styles/SpinnerContainer.styled';
import { SectionTitle } from './styles/SectionTitle.styled';
import { CardContainer } from './styles/CardContainer.styled';

const FeaturedProducts = () => {
  const { data: featuredProductsData, isLoading } = useFeaturedProducts();
  if (isLoading) {
    return (
      <SpinnerContainer>
        <Spinner animation="border" variant="danger" />
      </SpinnerContainer>
    );
  }
  return (
    <section>
      <SectionTitle>Featured Products</SectionTitle>
      <CardContainer>
        {featuredProductsData.results.map((featuredProduct) => (
          <ProductCard
            key={featuredProduct.id}
            name={featuredProduct.data.name}
            image={featuredProduct.data.mainimage.url}
            buttonText="Add to cart"
            price={featuredProduct.data.price}
            category={featuredProduct.data.category.slug}
            isProduct={true}
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
