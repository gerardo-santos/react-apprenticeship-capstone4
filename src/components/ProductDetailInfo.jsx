import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import ProductTable from './ProductTable';

const ProductDetailInfo = ({ productDetails }) => {
  return (
    <div>
      <h4>Price: ${productDetails.data.price}</h4>
      <label htmlFor="quantity">Quantity:</label>
      <br />
      <input type="number" name="quantity" id="quantity" />
      <br /> <br />
      <Button>Add to cart</Button>
      <br /> <br />
      <h5>SKU: {productDetails.data.sku}</h5>
      <h5>Category: {productDetails.data.category.slug}</h5>
      <h5>Tags: </h5>
      <ul>
        {productDetails.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <p>{productDetails.data.description[0].text}</p>
      <ProductTable specs={productDetails.data.specs} />
    </div>
  );
};
ProductDetailInfo.propTypes = {
  productDetails: PropTypes.object,
};

export default ProductDetailInfo;
