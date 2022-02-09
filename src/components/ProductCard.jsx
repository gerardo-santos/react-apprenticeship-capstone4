import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
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
  isProduct,
}) => {
  const { dispatch } = useContext(GlobalContext);
  const handleClick = () => {
    if (isProduct) return;
    dispatch({ type: 'FILTER_BY_CATEGORY', payload: id });
  };
  return (
    <Link to={url} style={{ textDecoration: 'none', color: '#fefefe' }}>
      <StyledCard>
        <CardImage src={image} />
        <CardTitle>{name}</CardTitle>
        {isProduct && (
          <ProductCardDetails>
            <h5>{category}</h5>
            <h6>$ {price}</h6>
          </ProductCardDetails>
        )}
        <Button onClick={handleClick}>{buttonText}</Button>
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
  isProduct: PropTypes.bool,
};
export default ProductCard;
