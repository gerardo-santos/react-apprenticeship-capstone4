import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { StyledCard } from './styles/Card.styled';
import { CardImage } from './styles/CardImage.styled';
import { CardTitle } from './styles/CardTitle.styled';
import { ProductCardDetails } from './styles/ProductCardDetails.styled';

const ProductCard = ({
  name,
  url,
  image,
  price,
  category,
  buttonText,
  isProduct,
}) => {
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
        <Button>{buttonText}</Button>
      </StyledCard>
    </Link>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  buttonText: PropTypes.string,
  isProduct: PropTypes.bool,
};
export default ProductCard;
