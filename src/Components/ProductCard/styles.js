import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  div {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    img {
      width: 220px;
    }

    div {
      flex-direction: column;
      display: flex;
      align-items: flex-start;
    }
  }

  @media (min-width: 768px) {
    div {
      flex-direction: row;
      width: 600px;
    }
  }

  @media (min-width: 1024px) {
    margin: 0 auto;
    div {
      flex-direction: row;
      width: 700px;
    }
  }
`;
