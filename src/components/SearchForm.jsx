import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { GlobalContext } from '../context/GlobalContext';

const SearchForm = () => {
  const { query, dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    dispatch({ type: 'GET_SEARCH', payload: query });
    navigate('/search-results');
  };
  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        value={query}
        onChange={(e) =>
          dispatch({ type: 'UPDATE_QUERY', payload: e.target.value })
        }
      />
      <Button type="submit" variant="primary">
        Search
      </Button>
    </Form>
  );
};

export default SearchForm;
