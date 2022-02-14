import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import CartItem from '../components/CartItem';
import { PageContainer } from '../components/styles/PageContainer.styled';
import { SectionTitle } from '../components/styles/SectionTitle.styled';

const ShoppingCart = () => {
  const { cart } = useContext(GlobalContext);
  const cartTotal = cart.reduce(
    (sum, prod) => sum + prod.price * prod.amount,
    0
  );
  return (
    <PageContainer>
      <SectionTitle>Cart</SectionTitle>
      {cart.length > 0 ? (
        <section>
          {cart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
          <h4>Cart total: ${cartTotal}</h4>
          <Button as={Link} to="/checkout">
            Go to checkout
          </Button>
          <br />
          <br />
        </section>
      ) : (
        <Alert>The cart is empty</Alert>
      )}
    </PageContainer>
  );
};

export default ShoppingCart;
