import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Spinner from 'react-bootstrap/Spinner';
import { useSearchProducts } from '../utils/hooks/useSearchProducts';
import ProductCard from '../components/ProductCard';
import { CardContainer } from '../components/styles/CardContainer.styled';
import { PageContainer } from '../components/styles/PageContainer.styled';
import { SpinnerContainer } from '../components/styles/SpinnerContainer.styled';
import { SectionTitle } from '../components/styles/SectionTitle.styled';

const SearchResults = () => {
  const { search } = useContext(GlobalContext);
  const { data: searchData, isLoading } = useSearchProducts(search);
  if (isLoading) {
    return (
      <SpinnerContainer>
        <Spinner animation="border" variant="danger" />
      </SpinnerContainer>
    );
  }
  return (
    <PageContainer>
      <SectionTitle>Search results</SectionTitle>
      <CardContainer>
        {searchData.results.map((featuredProduct) => (
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
    </PageContainer>
  );
};

export default SearchResults;
