import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  height: 572px;
  background-color: var(--color-gray-0);
  width: 90%;
  margin: 15px auto;

	.description {
    font-size: 1.2rem;
    color: var(--color-gray-50);
  }

	.button-back{
		background-color: #fff;
		color: #000;
		border: solid 0.5px var(--color-gray-50);
	}

	.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root
    .MuiOutlinedInput-notchedOutline{
			border: solid var(--color-gray-50) 2px;
		}

		.MuiFormControl-root{
			margin: 0;
		}
`;

export const DivSpace = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  height: 100%;
  width: 80%;

  h3 {
    margin: 15px 0;
  }
  .flex {
    display: flex;
    justify-content: space-between;

    align-items: center;
  }

  .bold {
    font-weight: bold;
    font-size: 1.3rem;
  }

  .description {
    font-size: 1.2rem;
    color: var(--color-gray-50);
  }
  .small {
    font-size: 0.9rem;
  }
`;
