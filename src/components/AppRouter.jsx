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
      <Route path="products" element={<ProductList />} />
      <Route path="product/:id" element={<ProductDetail />} />
      <Route path="search" element={<SearchResults />} />
      <Route path="cart" element={<ShoppingCart />} />
      <Route path="checkout" element={<Checkout />} />
    </Routes>
  );
};

export default AppRouter;
