import { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import { GlobalContext } from '../context/GlobalContext';

const CheckoutTable = () => {
  const { cart } = useContext(GlobalContext);
  const cartTotal = cart.reduce(
    (sum, prod) => sum + prod.price * prod.amount,
    0
  );
  if (cart.length === 0) {
    return <Alert>There are not products to show, cart is empty.</Alert>;
  }
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((prod, index) => (
          <tr key={prod.id}>
            <td>{index + 1}</td>
            <td>{prod.name}</td>
            <td>{prod.amount}</td>
            <td>${prod.amount * prod.price}</td>
          </tr>
        ))}
        <tr>
          <td colSpan={4}>
            Cart total: <strong>${cartTotal}</strong>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CheckoutTable;
