import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 10px;

  div {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;

    h3,
    p,
    h4,
    h5 {
      padding-bottom: 5px;
    }

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
    margin-top: auto;
    div {
      flex-direction: row;
      width: 600px;

      h3,
      p,
      h4,
      h5 {
        padding-bottom: 10px;
      }
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
