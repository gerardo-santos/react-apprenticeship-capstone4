import Form from 'react-bootstrap/Form';

const CheckoutForm = () => {
  return (
    <Form>
      <h4>Customer information</h4>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
        <br />
        <Form.Label>Zip code</Form.Label>
        <Form.Control type="text" placeholder="Zip code example: 89000" />
        <br />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="email@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Order notes</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
};

export default CheckoutForm;
