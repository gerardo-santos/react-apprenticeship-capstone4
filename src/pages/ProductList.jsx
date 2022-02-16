import { useContext } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Outlet, useLocation } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import FilteredProducts from '../components/FilteredProducts';
import ProductFilters from '../components/ProductFilters';
import PaginationButtons from '../components/PaginationButtons';
import { useFilters } from '../utils/hooks/useFilters';
import { PageContainer } from '../components/styles/PageContainer.styled';
import { SectionTitle } from '../components/styles/SectionTitle.styled';
import { ProductListSection } from '../components/styles/ProductListSection.styled';
import { SpinnerContainer } from '../components/styles/SpinnerContainer.styled';

const ProductList = () => {
  const { selectedCategory } = useContext(GlobalContext);
  const location = useLocation();
  const filtersData = useFilters(selectedCategory, location);

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
      <Outlet />
    </PageContainer>
  );
};

export default ProductList;
