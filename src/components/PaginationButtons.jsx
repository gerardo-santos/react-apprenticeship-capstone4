import Pagination from 'react-bootstrap/Pagination';
import { PaginationButtonsContainer } from './styles/PaginationButtonsContainer.styled';

const PaginationButtons = () => {
  const pages = [1, 2, 3, 4, 5];
  return (
    <PaginationButtonsContainer>
      <Pagination>
        {pages.map((page) => (
          <Pagination.Item active={page === 1} key={page}>
            {page}
          </Pagination.Item>
        ))}
      </Pagination>
    </PaginationButtonsContainer>
  );
};

export default PaginationButtons;
