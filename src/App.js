import { BrowserRouter } from 'react-router-dom';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import NavBar from './components/NavBar';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';

const App = () => {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
