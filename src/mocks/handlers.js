import { rest } from 'msw';
import { API_BASE_URL } from '../utils/constants';
import bannersData from '../mocks/en-us/featured-banners.json';
import featuredProductsData from '../mocks/en-us/featured-products.json';
import productCategoriesData from '../mocks/en-us/product-categories.json';
import productsData from '../mocks/en-us/products.json';

const apiRef = 'YZaBvBIAACgAvnOP';

const bannersUrl = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
  '[[at(document.type, "banner")]]'
)}&lang=en-us&pageSize=5`;

const featuredProductsUrl = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
  '[[at(document.type, "product")][at(document.tags, ["Featured"])]]'
)}&lang=en-us&pageSize=16`;

const productCategoriesUrl = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
  '[[at(document.type,"category")]]'
)}&lang=en-us&pageSize=10`;

const productsUrl = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
  '[[at(document.type, "product")][any(my.product.category, [])]]'
)}&lang=en-us&pageSize=48`;

const handlers = [
  rest.get(bannersUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(bannersData));
  }),

  rest.get(featuredProductsUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(featuredProductsData));
  }),

  rest.get(productCategoriesUrl, (req, res, ctx) => {
    console.log(req.url.searchParams);
    return res(ctx.status(200), ctx.json(productCategoriesData));
  }),

  rest.get(productsUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(productsData));
  }),
];

export { handlers };
