import bannersData from '../mocks/en-us/featured-banners.json';
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  const banners = bannersData.results;
  return (
    <Carousel>
      {banners.map((banner) => (
        <Carousel.Item key={banner.id}>
          <img
            className="d-block w-100"
            src={banner.data.main_image.url}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>{banner.data.title}</h5>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
