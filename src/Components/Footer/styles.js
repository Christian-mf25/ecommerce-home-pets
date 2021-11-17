import styled from "styled-components";

export const FooterContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    position: fixed;
    width: 100%;
    bottom: 0;
    background-color: rgba(17, 17, 17, 1);
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 40px;
    }
  }
`;
