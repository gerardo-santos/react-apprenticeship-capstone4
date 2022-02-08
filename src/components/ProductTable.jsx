import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';

const ProductTable = ({ specs }) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Spec Name</th>
          <th>Spec Value</th>
        </tr>
      </thead>
      <tbody>
        {specs.map((spec, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{spec.spec_name}</td>
            <td>{spec.spec_value}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

ProductTable.propTypes = {
  specs: PropTypes.array,
};

export default ProductTable;
