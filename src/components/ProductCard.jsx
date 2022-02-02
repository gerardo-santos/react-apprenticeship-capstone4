import PropTypes from 'prop-types';
import { StyledCard } from './styles/Card.styled';
import { CardImage } from './styles/CardImage.styled';
import { CardTitle } from './styles/CardTitle.styled';
import Button from 'react-bootstrap/Button';

const ProductCard = ({ name, image, buttonText }) => {
  return (
    <StyledCard>
      <CardImage src={image} />
      <CardTitle>{name}</CardTitle>
      <Button>{buttonText}</Button>
    </StyledCard>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  buttonText: PropTypes.string,
};
export default ProductCard;
