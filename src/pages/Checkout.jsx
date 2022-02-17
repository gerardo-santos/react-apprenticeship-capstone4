import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { GlobalContext } from '../context/GlobalContext';
import CheckoutForm from '../components/CheckoutForm';
import CheckoutTable from '../components/CheckoutTable';
import { PageContainer } from '../components/styles/PageContainer.styled';
import { SectionTitle } from '../components/styles/SectionTitle.styled';

const Checkout = () => {
  const { dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch({ type: 'UPDATE_CART', payload: [] });
    navigate('/');
  };

  return (
    <PageContainer>
      <SectionTitle>Checkout</SectionTitle>
      <CheckoutForm />
      <CheckoutTable />
      <Button variant="secondary" as={Link} to="/cart">
        Go back to cart
      </Button>{' '}
      <Button onClick={handleClick}>Place order</Button>
      <br />
      <br />
    </PageContainer>
  );
};

export default Checkout;
