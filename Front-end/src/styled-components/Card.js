import styled, { css } from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  width: 230px;
  background-color: rgba(0, 0, 0, 0.3);
  height: 330px;
  position: relative;
  flex-direction: column;
  justify-content: space-between;

  & img {
    width: 100%;
    object-fit: contain;
    top: 0;
  }

  & > div {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;

    & p:nth-child(1) {
      & span {
        font-weight: bold;
      }

      & span:nth-child(1) {
        color: green;
      }

      & span:nth-child(2) {
        color: red;
      }
    }

    & button {
      padding: 10px 30px;
      justify-content: center;
      font-weight: 600;
      border: none;
      background-color: #5754ff;
      color: #fff;
      font-size: 16px;
      border-radius: 5px;
    }

    ${({ offerClicked }) => offerClicked && css``}

    & input {
      width: 100%;
    }
  }
`;
