import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { useProductDetail } from '../utils/hooks/useProductDetail';
import ProductDetailInfo from '../components/ProductDetailInfo';
import ProductGallery from '../components/ProductGallery';
import { PageContainer } from '../components/styles/PageContainer.styled';
import { SpinnerContainer } from '../components/styles/SpinnerContainer.styled';
import { SectionTitle } from '../components/styles/SectionTitle.styled';
import { ProductDetailData } from '../components/styles/ProductDetailData.styled';
import { ProductGalleryContainer } from '../components/styles/ProductGalleryContainer.styled';
import { ProductDetailInfoContainer } from '../components/styles/ProductDetailInfoContainer.styled';

const ProductDetail = () => {
  const { id } = useParams();
  const { data: productDetailData, isLoading } = useProductDetail(id);
  const productDetails =
    productDetailData.results && productDetailData.results[0];
  console.log(productDetails);

  if (isLoading) {
    return (
      <SpinnerContainer>
        <Spinner animation="border" variant="danger" />
      </SpinnerContainer>
    );
  }

  return (
    <PageContainer>
      <SectionTitle>{productDetails.data.name}</SectionTitle>
      <ProductDetailData>
        <ProductGalleryContainer>
          <ProductGallery images={productDetails.data.images} />
        </ProductGalleryContainer>
        <ProductDetailInfoContainer>
          <ProductDetailInfo productDetails={productDetails} />
        </ProductDetailInfoContainer>
      </ProductDetailData>
    </PageContainer>
  );
};

export default ProductDetail;
