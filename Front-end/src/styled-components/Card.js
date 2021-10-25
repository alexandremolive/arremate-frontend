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

    & div {
      display: flex;
      width: 100%;
      justify-content: center;
      padding: 0 10px;

      & button {
        padding: 10px 30px;
        font-weight: 600;
        border: none;
        background-color: #5754ff;
        color: #fff;
        font-size: 16px;
        border-radius: 5px;

        ${({ offerClicked }) =>
          offerClicked &&
          css`
            padding: 10px 5px;
          `}
      }

      & input {
        margin: 0 20px;
        padding: 10px 0;
        width: 100%;
        max-width: 0;
        border: none;
        background-color: rgba(255, 255, 255, 0.5);
        transition: max-width 0.3s ease;

        ${({ offerClicked }) =>
          offerClicked &&
          css`
            padding: 10px 10px;
            max-width: 200px;
          `}
      }
    }
  }
`;
