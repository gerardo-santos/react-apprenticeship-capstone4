import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import SearchForm from './SearchForm';
import { GlobalContext } from '../context/GlobalContext';
import logo from '../assets/shop-logo.png';

const NavBar = () => {
  const { cart } = useContext(GlobalContext);
  return (
    <Navbar bg="danger" expand="lg" variant="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            alt="logo-img"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          My Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Button as={Link} to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} /> ({cart.length})
            </Button>
          </Nav>
          <SearchForm />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
