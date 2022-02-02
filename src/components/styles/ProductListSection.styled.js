import styled from 'styled-components';

export const ProductListSection = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
