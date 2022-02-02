import FeaturedProducts from '../components/FeaturedProducts';
import ProductCategories from '../components/ProductCategories';
import Slider from '../components/Slider';
import { PageContainer } from '../components/styles/PageContainer.styled';

const Home = () => {
  return (
    <div>
      <Slider />
      <PageContainer>
        <ProductCategories />
        <FeaturedProducts />
      </PageContainer>
    </div>
  );
};

export default Home;
