import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
import NavBar from './components/NavBar';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
