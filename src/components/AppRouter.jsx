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
      <Route path="search" element={<SearchResults />} />
      <Route path="cart" element={<ShoppingCart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="product">
        <Route index element={<ProductList />} />
        <Route path=":id" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
