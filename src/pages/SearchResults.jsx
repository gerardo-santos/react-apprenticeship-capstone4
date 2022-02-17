import { useContext } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { GlobalContext } from '../context/GlobalContext';
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
        {searchData.results.length > 0 ? (
          searchData.results.map((searchProduct) => (
            <ProductCard
              key={searchProduct.id}
              name={searchProduct.data.name}
              url={`../product/${searchProduct.id}`}
              image={searchProduct.data.mainimage.url}
              buttonText="Add to cart"
              price={searchProduct.data.price}
              category={searchProduct.data.category.slug}
              stock={searchProduct.data.stock}
              isProduct={true}
            />
          ))
        ) : (
          <Alert>There are no results. Please search again.</Alert>
        )}
      </CardContainer>
    </PageContainer>
  );
};

export default SearchResults;
