import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalContext';
import { CartItemContainer } from './styles/CartItemContainer.styled';
import { CartItemInfoContainer } from './styles/CartItemInfoContainer.styled';

const CartItem = ({ product }) => {
  const { dispatch, cart } = useContext(GlobalContext);
  const [number, setNumber] = useState(product.amount);
  const deleteProductFromCart = () => {
    const newCart = cart.filter((cartProd) => cartProd.id !== product.id);
    dispatch({ type: 'UPDATE_CART', payload: newCart });
  };

  const updateProductAmount = (e) => {
    const newNumber = e.target.value;
    if (newNumber <= product.stock) {
      setNumber(newNumber);
      const newCart = cart.map((cartProd) =>
        cartProd.id === product.id
          ? { ...cartProd, amount: newNumber }
          : cartProd
      );
      dispatch({ type: 'UPDATE_CART', payload: newCart });
    } else {
      alert('not enough stock');
    }
  };
  return (
    <>
      <CartItemContainer>
        <div>
          <img src={product.image} alt={product.name} width="250" />
        </div>
        <CartItemInfoContainer>
          <h5>{product.name}</h5>
          <h6>Price: ${product.price}</h6>
          <h6>Stock: {product.stock}</h6>
          <h6>Quantity:</h6>
          <input
            type="number"
            value={number}
            onChange={updateProductAmount}
            style={{ width: '100px', marginBottom: '10px' }}
            max={product.stock}
          />
          <h6>Subtotal: ${product.amount * product.price}</h6>
        </CartItemInfoContainer>
      </CartItemContainer>
      <Button variant="danger" onClick={deleteProductFromCart}>
        Delete from cart
      </Button>
      <hr />
    </>
  );
};

CartItem.propTypes = {
  product: PropTypes.object,
};
export default CartItem;
