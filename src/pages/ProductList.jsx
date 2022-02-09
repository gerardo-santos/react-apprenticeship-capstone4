import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useProductCategories } from '../utils/hooks/useProductCategories';
import { useAllProducts } from '../utils/hooks/useAllProducts';
import FilteredProducts from '../components/FilteredProducts';
import ProductFilters from '../components/ProductFilters';
import PaginationButtons from '../components/PaginationButtons';
import { PageContainer } from '../components/styles/PageContainer.styled';
import { SectionTitle } from '../components/styles/SectionTitle.styled';
import { ProductListSection } from '../components/styles/ProductListSection.styled';
import { SpinnerContainer } from '../components/styles/SpinnerContainer.styled';

const ProductList = () => {
  const { data: allProductsData, isLoading: productsAreLoading } =
    useAllProducts();

  const { data: categoriesData, isLoading: categoriesAreLoading } =
    useProductCategories();

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [productCategories, setProductCategories] = useState([]);

  const getActiveCategories = () => {
    const activeCategories = productCategories.filter(
      (category) => category.active
    );
    const activeCategoriesIds = activeCategories.map((category) => category.id);
    return activeCategoriesIds;
  };

  const filterProducts = (activeCategoriesIds) => {
    const newFilteredProducts = allProductsData.results.filter((product) =>
      activeCategoriesIds.includes(product.data.category.id)
    );
    setFilteredProducts(newFilteredProducts);
  };

  const toggleCategory = (id) => {
    const modifiedCategories = productCategories.map((category) =>
      category.id === id ? { ...category, active: !category.active } : category
    );
    setProductCategories(modifiedCategories);
  };

  const clearAllFilters = () => {
    const clearedCategories = productCategories.map((category) => {
      return { ...category, active: false };
    });
    setProductCategories(clearedCategories);
  };

  useEffect(() => {
    const activeCategoriesIds = getActiveCategories();
    if (activeCategoriesIds.length === 0) {
      setFilteredProducts(
        allProductsData.results ? [...allProductsData.results] : []
      );
      return;
    }
    filterProducts(activeCategoriesIds);
  }, [productCategories]);

  useEffect(() => {
    setFilteredProducts(
      allProductsData.results ? [...allProductsData.results] : []
    );
    setProductCategories(
      categoriesData.results ? [...categoriesData.results] : []
    );
  }, [allProductsData, categoriesData]);

  if (productsAreLoading || categoriesAreLoading) {
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
          toggleCategory={toggleCategory}
          productCategories={productCategories}
          clearAllFilters={clearAllFilters}
        />
        <FilteredProducts filteredProducts={filteredProducts} />
        <PaginationButtons />
      </ProductListSection>
    </PageContainer>
  );
};

export default ProductList;
