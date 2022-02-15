import { useContext } from 'react';
// import { useNavigate, createSearchParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
// import { useProductCategories } from '../utils/hooks/useProductCategories';
// import { useAllProducts } from '../utils/hooks/useAllProducts';
import { GlobalContext } from '../context/GlobalContext';
import FilteredProducts from '../components/FilteredProducts';
import ProductFilters from '../components/ProductFilters';
import PaginationButtons from '../components/PaginationButtons';
import { PageContainer } from '../components/styles/PageContainer.styled';
import { SectionTitle } from '../components/styles/SectionTitle.styled';
import { ProductListSection } from '../components/styles/ProductListSection.styled';
import { SpinnerContainer } from '../components/styles/SpinnerContainer.styled';
import { useFilters } from '../utils/hooks/useFilters';

const ProductList = () => {
  const { selectedCategory } = useContext(GlobalContext);
  const filtersData = useFilters(selectedCategory);

  if (filtersData.productsAreLoading || filtersData.categoriesAreLoading) {
    return (
      <SpinnerContainer>
        <Spinner animation="border" variant="danger" />
      </SpinnerContainer>
    );
  }

  return (
    <PageContainer>
      <SectionTitle>Product List</SectionTitle>
      <ProductListSection>
        <ProductFilters
          toggleCategory={filtersData.toggleCategory}
          productCategories={filtersData.productCategories}
          clearAllFilters={filtersData.clearAllFilters}
        />
        <FilteredProducts filteredProducts={filtersData.filteredProducts} />
        <PaginationButtons />
      </ProductListSection>
    </PageContainer>
  );
};

export default ProductList;
