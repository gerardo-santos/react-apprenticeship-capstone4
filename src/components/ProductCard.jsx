import { StyledCard } from './styles/Card.styled';
import { CardImage } from './styles/CardImage.styled';
import { CardTitle } from './styles/CardTitle.styled';
import { ProductCardDetails } from './styles/ProductCardDetails.styled';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const ProductCard = ({
  name,
  image,
  price,
  category,
  buttonText,
  productListPage,
}) => {
  return (
    <StyledCard>
      <CardImage src={image} />
      <CardTitle>{name}</CardTitle>
      {productListPage && (
        <ProductCardDetails>
          <h4>{category}</h4>
          <h5>$ {price}</h5>
        </ProductCardDetails>
      )}
      <Button>{buttonText}</Button>
    </StyledCard>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  buttonText: PropTypes.string,
  productListPage: PropTypes.bool,
};
export default ProductCard;
