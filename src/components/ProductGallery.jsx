import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';

const ProductGallery = ({ images }) => {
  return (
    <Carousel fade className="product-gallery">
      {images.map((img) => (
        <Carousel.Item key={Math.random()}>
          <img
            className="d-block w-100"
            src={img.image.url}
            alt="product-image"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

ProductGallery.propTypes = {
  images: PropTypes.array,
};

export default ProductGallery;
