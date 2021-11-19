import styled from "styled-components";
import circlePrimary from "../../assets/image/circle-primary.svg";
import circleSecondary from "../../assets/image/circle-secondary.svg";

export const HomeMain = styled.main`
  display: flex;
  align-items: center;
  position: relative;
  height: 100vh;

  ::before {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 100vw;
    height: 75vh;
    background-color: var(--color-secondary);
    z-index: -1;
  }

  @media (min-width: 991px) {
    ::before {
      width: 50vw;
      height: 100vh;
    }
  }
`;

export const ContainerModal = styled.div`
  display: flex;
  flex-direction: row-reverse;

  flex-wrap: wrap;
  align-items: center;
  width: 100%;

  @media (max-width: 991px) {
    grid-gap: 4rem;
    margin: 0 15px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;

  flex-wrap: wrap;
  align-items: center;
  width: 100%;

  @media (max-width: 991px) {
    grid-gap: 1rem;
    margin: 0 15px;
  }
`;

export const DivLogo = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;

  img {
    width: 100px;
  }

  @media (min-width: 991px) {
    width: 50%;

    img {
      width: 200px;
    }
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  p {
    color: var(--color-gray-50);
  }

  @media (min-width: 991px) {
    width: 50%;
  }
`;

export const DivForm = styled.div``;

export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  background-color: #fff;
  border: 3px solid var(--color-gray-0);
  padding: 30px 15px;
  padding: 20px;
  border-radius: 5px;
  grid-gap: 1rem;
  max-width: 400px;

  ::before {
    content: "";
    position: absolute;
    top: -8%;
    left: 0;
    background-image: url(${circlePrimary});
    height: 10px;
    width: 50px;
    z-index: 1;
  }

  ::after {
    content: "";
    position: absolute;
    bottom: -5%;
    right: 0;
    background-image: url(${circleSecondary});
    height: 10px;
    width: 50px;
    z-index: 1;
  }

  @media (min-width: 991px) {
    width: 50%;
    max-width: 400px;
    margin: 0 auto;
  }

  form {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    width: 100%;
    grid-gap: 1rem;
  }
  button {
    width: 100%;
  }
`;
