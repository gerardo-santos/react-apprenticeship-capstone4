import { useEffect, useState } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';
import { useAllProducts } from './useAllProducts';
import { useProductCategories } from './useProductCategories';

export const useFilters = (selectedCategory, location) => {
  const navigate = useNavigate();
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();

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

  const filterProducts = async (activeCategoriesIds) => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    try {
      const response = await fetch(
        `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
          `[[at(document.type, "product")][any(my.product.category, ${JSON.stringify(
            activeCategoriesIds
          )})]]`
        )}&lang=en-us&pageSize=16`,
        {
          signal: controller.signal,
        }
      );
      const data = await response.json();
      setFilteredProducts(data.results);
    } catch (err) {
      console.log(err);
    }
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
      const path = location.pathname.split('/');
      if (path.length !== 3) {
        navigate('/product');
      }
      return;
    }
    filterProducts(activeCategoriesIds);
    const params = { category: activeCategoriesIds };
    navigate({
      pathname: '/product',
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
