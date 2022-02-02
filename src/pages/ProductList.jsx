import { PageContainer } from '../components/styles/PageContainer.styled';
import { SectionTitle } from '../components/styles/SectionTitle.styled';
import { ProductListSection } from '../components/styles/ProductListSection.styled';
import FilteredProducts from '../components/FilteredProducts';
import ProductFilters from '../components/ProductFilters';

const ProductList = () => {
  return (
    <PageContainer>
      <SectionTitle>Product List</SectionTitle>
      <ProductListSection>
        <ProductFilters />
        <FilteredProducts />
      </ProductListSection>
    </PageContainer>
  );
};

export default ProductList;
