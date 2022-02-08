import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useAllProducts() {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [allProducts, setAllProducts] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getAllProducts() {
      try {
        setAllProducts({ data: {}, isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "product")][any(my.product.category, [])]]'
          )}&lang=en-us&pageSize=12`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setAllProducts({ data, isLoading: false });
      } catch (err) {
        setAllProducts({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getAllProducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return allProducts;
}
