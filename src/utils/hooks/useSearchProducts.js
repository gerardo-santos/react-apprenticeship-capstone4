import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useSearchProducts(search) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [searchProducts, setSearchProducts] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getSearchProducts() {
      try {
        setSearchProducts({ data: {}, isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            `[[at(document.type, "product")][fulltext(document, "${search}")]]`
          )}&lang=en-us&pageSize=20`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setSearchProducts({ data, isLoading: false });
      } catch (err) {
        setSearchProducts({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getSearchProducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, search]);

  return searchProducts;
}
