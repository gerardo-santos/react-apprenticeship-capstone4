import Spinner from 'react-bootstrap/Spinner';
import { useProductCategories } from '../utils/hooks/useProductCategories';
import ProductCard from './ProductCard';
import { SpinnerContainer } from './styles/SpinnerContainer.styled';
import { SectionTitle } from './styles/SectionTitle.styled';
import { CardContainer } from './styles/CardContainer.styled';

const ProductCategories = () => {
  const { data: categoriesData, isLoading } = useProductCategories();
  if (isLoading) {
    return (
      <SpinnerContainer>
        <Spinner animation="border" variant="danger" />
      </SpinnerContainer>
    );
  }
  return (
    <section>
      <SectionTitle>Product Categories</SectionTitle>
      <CardContainer>
        {categoriesData.results.map((productCategory) => (
          <ProductCard
            key={productCategory.id}
            url={productCategory.id}
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
