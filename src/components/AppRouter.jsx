import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import ProductList from '../pages/ProductList';
import ProductDetail from '../pages/ProductDetail';
import SearchResults from '../pages/SearchResults';
import ShoppingCart from '../pages/ShoppingCart';
import Checkout from '../pages/Checkout';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="product-list" element={<ProductList />} />
      <Route path="product/:id" element={<ProductDetail />} />
      <Route path="search-results" element={<SearchResults />} />
      <Route path="shopping-cart" element={<ShoppingCart />} />
      <Route path="checkout" element={<Checkout />} />
    </Routes>
  );
};

export default AppRouter;
