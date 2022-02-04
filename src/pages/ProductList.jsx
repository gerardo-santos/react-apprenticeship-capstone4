import { useState, useEffect } from 'react';
import FilteredProducts from '../components/FilteredProducts';
import ProductFilters from '../components/ProductFilters';
import PaginationButtons from '../components/PaginationButtons';
import { PageContainer } from '../components/styles/PageContainer.styled';
import { SectionTitle } from '../components/styles/SectionTitle.styled';
import { ProductListSection } from '../components/styles/ProductListSection.styled';
import productsData from '../mocks/en-us/products.json';
import productCategoriesData from '../mocks/en-us/product-categories.json';

const ProductList = () => {
  const [productCategories, setProductCategories] = useState(() => {
    return productCategoriesData.results.map((category) => ({
      ...category,
      active: false,
    }));
  });

  const [filteredProducts, setFilteredProducts] = useState(() => [
    ...productsData.results,
  ]);

  const getActiveCategories = () => {
    const activeCategories = productCategories.filter(
      (category) => category.active
    );
    const activeCategoriesIds = activeCategories.map((category) => category.id);
    return activeCategoriesIds;
  };

  const filterProducts = (activeCategoriesIds) => {
    const newFilteredProducts = productsData.results.filter((product) =>
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

  useEffect(() => {
    const activeCategoriesIds = getActiveCategories();
    if (activeCategoriesIds.length === 0) {
      setFilteredProducts([...productsData.results]);
      return;
    }
    filterProducts(activeCategoriesIds);
  }, [productCategories]);

  return (
    <PageContainer>
      <SectionTitle>Product List</SectionTitle>
      <ProductListSection>
        <ProductFilters
          toggleCategory={toggleCategory}
          productCategories={productCategories}
        />
        <FilteredProducts filteredProducts={filteredProducts} />
        <PaginationButtons />
      </ProductListSection>
    </PageContainer>
  );
};

export default ProductList;
