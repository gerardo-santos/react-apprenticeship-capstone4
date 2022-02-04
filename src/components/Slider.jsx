import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';
import { useFeaturedBanners } from '../utils/hooks/useFeaturedBanners';
import { SpinnerContainer } from './styles/SpinnerContainer.styled';

const Slider = () => {
  const { data: bannersData, isLoading } = useFeaturedBanners();
  if (isLoading) {
    return (
      <SpinnerContainer>
        <Spinner animation="border" variant="danger" />
      </SpinnerContainer>
    );
  }
  return (
    <Carousel>
      {bannersData.results.map((banner) => (
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
