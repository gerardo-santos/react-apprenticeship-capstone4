import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { GlobalContext } from '../context/GlobalContext';
import { StyledCard } from './styles/Card.styled';
import { CardImage } from './styles/CardImage.styled';
import { CardTitle } from './styles/CardTitle.styled';
import { ProductCardDetails } from './styles/ProductCardDetails.styled';

const ProductCard = ({
  id,
  name,
  url,
  image,
  price,
  category,
  buttonText,
  stock,
  isProduct,
}) => {
  const { dispatch, cart } = useContext(GlobalContext);
  const handleCardClick = () => {
    if (isProduct) return;
    dispatch({ type: 'FILTER_BY_CATEGORY', payload: id });
  };

  const handleBtnClick = (e) => {
    if (isProduct) {
      e.preventDefault();
      const newProduct = { id, name, image, price, category, stock, amount: 1 };
      const productAlreadyInCart = cart.some((prod) => prod.id === id);
      let newCart = [];
      if (productAlreadyInCart) {
        newCart = cart.map((prod) =>
          prod.id === id ? { ...prod, amount: newProduct.amount } : prod
        );
      } else {
        newCart = [...cart, newProduct];
      }
      dispatch({ type: 'UPDATE_CART', payload: newCart });
    }
  };
  return (
    <Link
      to={url}
      style={{ textDecoration: 'none', color: '#fefefe' }}
      onClick={handleCardClick}
    >
      <StyledCard>
        <CardImage src={image} />
        <CardTitle>{name}</CardTitle>
        {isProduct && (
          <ProductCardDetails>
            <h5>{category}</h5>
            <h6>$ {price}</h6>
          </ProductCardDetails>
        )}
        <Button onClick={handleBtnClick}>{buttonText}</Button>
      </StyledCard>
    </Link>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  buttonText: PropTypes.string,
  stock: PropTypes.number,
  isProduct: PropTypes.bool,
};
export default ProductCard;
