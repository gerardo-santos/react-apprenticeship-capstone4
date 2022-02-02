import styled from 'styled-components';

export const FilteredProductsContainer = styled.main`
  width: 75%;
  margin-top: 30px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 0 5px 5px 0;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;
