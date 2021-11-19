import styled from "styled-components";

export const Product = styled.li`
  display: flex;
  border: 1px solid var(--color-gray-100);
  width: 90%;
  margin: 20px auto;
  padding: 10px 5px;
	border-radius: 5px;
	max-width: 517px;
	max-height: 138px;

  .text {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: space-evenly;
		margin-left: 10px;
  }

  img {
    width: 90px;
  }

  p {
    color: var(--color-gray-50);
  }

  button {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    border: none;
		color: #ffff;
		font-weight: bold;
		cursor: pointer;
  }

	button:hover{
		filter: brightness(0.8);
	}

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    flex-direction: row;
		width: 65px;

		span{
			margin: 0 5px;
			font-size: 1.2rem;
		}
  }

  .add {
		background-color: var(--color-secondary);
	}

  .sub {
		background-color: var(--color-secondary-50);
  }
`;
