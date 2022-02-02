import styled from 'styled-components';

export const StyledCard = styled.div`
  width: 300px;
  height: 350px;
  background-color: #232323;
  margin: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 3px solid #dc3545;
  -webkit-box-shadow: 5px 5px 15px 5px #868686;
  box-shadow: 5px 5px 15px 5px #868686;
  &:hover {
    -webkit-box-shadow: 5px 5px 15px 5px #939393;
    box-shadow: 5px 5px 15px 5px #939393;
    background-color: #272727;
    transition: 0.5s;
  }
  @media (max-width: 400px) {
    min-width: 266px;
  }
`;
