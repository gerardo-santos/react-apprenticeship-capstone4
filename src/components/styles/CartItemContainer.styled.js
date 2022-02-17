import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;
