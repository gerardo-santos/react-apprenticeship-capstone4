import { useEffect, useState } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { useAllProducts } from './useAllProducts';
import { useProductCategories } from './useProductCategories';

export const useFilters = (selectedCategory) => {
  const navigate = useNavigate();

  const { data: allProductsData, isLoading: productsAreLoading } =
    useAllProducts();

  const { data: categoriesData, isLoading: categoriesAreLoading } =
    useProductCategories(selectedCategory);

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
    const newFilteredProducts =
      allProductsData.results &&
      allProductsData.results.filter((product) =>
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
      navigate('/products');
      return;
    }
    filterProducts(activeCategoriesIds);
    const params = { category: activeCategoriesIds };
    navigate({
      pathname: '/products',
      search: `?${createSearchParams(params)}`,
    });
  }, [productCategories]);

  useEffect(() => {
    setFilteredProducts(
      allProductsData.results ? [...allProductsData.results] : []
    );
    setProductCategories(
      categoriesData.results ? [...categoriesData.results] : []
    );
  }, [allProductsData, categoriesData]);

  const filtersData = {
    productsAreLoading,
    categoriesAreLoading,
    productCategories,
    filteredProducts,
    toggleCategory,
    clearAllFilters,
  };
  return filtersData;
};
