import styled from 'styled-components';

export const FilteredProductsContainer = styled.main`
  width: 75%;
  margin-top: 30px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;
