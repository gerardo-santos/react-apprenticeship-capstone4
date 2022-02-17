import { useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { GlobalContext } from '../context/GlobalContext';
import ProductTable from './ProductTable';

const ProductDetailInfo = ({ productDetails }) => {
  const numberInputRef = useRef();
  const { dispatch, cart } = useContext(GlobalContext);
  const handleClick = () => {
    const amountSelected = numberInputRef.current.value;
    if (!amountSelected) {
      alert('please add a quantity');
    } else {
      const newProduct = {
        id: productDetails.id,
        name: productDetails.data.name,
        image: productDetails.data.mainimage.url,
        price: productDetails.data.price,
        category: productDetails.data.category.slug,
        stock: productDetails.data.stock,
        amount: Number(amountSelected),
      };
      const productAlreadyInCart = cart.some(
        (prod) => prod.id === newProduct.id
      );
      let newCart = [];
      if (productAlreadyInCart) {
        newCart = cart.map((prod) =>
          prod.id === newProduct.id
            ? { ...prod, amount: newProduct.amount }
            : prod
        );
      } else {
        newCart = [...cart, newProduct];
      }
      dispatch({ type: 'UPDATE_CART', payload: newCart });
    }
  };

  return (
    <div>
      <h4>Price: ${productDetails.data.price}</h4>
      <label htmlFor="quantity">Quantity:</label>
      <br />
      <input
        type="number"
        ref={numberInputRef}
        name="quantity"
        id="quantity"
        min={1}
        max={productDetails.data.stock}
      />
      <br /> <br />
      <Button onClick={handleClick} disabled={productDetails.data.stock === 0}>
        Add to cart
      </Button>
      <br /> <br />
      <h5>SKU: {productDetails.data.sku}</h5>
      <h5>Category: {productDetails.data.category.slug}</h5>
      <h5>Stock: {productDetails.data.stock}</h5>
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
