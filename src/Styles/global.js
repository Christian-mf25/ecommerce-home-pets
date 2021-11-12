import { createGlobalStyle } from "styled-components";
import {
  Button,
  TextField,
  FormControl,
} from "@material-ui/core";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
	
	:root{
		--color-primary: #FBD10D;
		--color-primary-50: #FCE785;
		--color-secondary: #4D27D9;
		--color-secondary-50: #A592EB;
		--color-gray-100: #111111;
		--color-gray-50: #878787;
		--color-gray-20: #E0E0E0;
		--color-gray-0: #F5F5F5;
		--color-negative: #E60000;
		--color-warning: #FFCD07;
		--color-sucess: #168821;
		--color-information:#155BCB; 
	}
	
	html, body, main, div, section, li, ul, ol, span, header, h1, h2, h3, h4, h5, h6, p, a, button, form, input, img, figure, figcaption, label {
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	} 
`;

export const PrimaryButton = styled(Button)`
  &.MuiButton-root {
    background-color: #4d27d9;
    color: #ffff;
    :hover {
      background-color: #a592eb;
    }
  }
`;

export const SecondaryButton = styled(Button)`
  &.MuiButton-root {
    background-color: #f5f5f5;
    color: #e0e0e0;
    :hover {
      background-color: #e0e0e0;
      color: #828282;
    }
  }
`;

export const Input = styled(TextField)`
  & label.Mui-focused {
    color: #828282;
  }

  &.MuiTextField-root {
    background-color: #f5f5f5;
    color: #828282;
    border-radius: 5px;

    .MuiInput-underline:after {
      border: 2px solid #4d27d9;
    }

    fieldset {
      border: none;
    }

    &:hover fieldset {
      border: 1px solid #4d27d9;
    }

    .Mui-focused fieldset {
      border: solid 2px #4d27d9;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px #f5f5f5 inset;
      -webkit-text-fill-color: #000;
    }
  }
`;

export const StyledFormControl = styled(FormControl)`
  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root
    .MuiOutlinedInput-notchedOutline {
    color: #828282;
    border-radius: 5px;
    border: none;
  }

  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
    background-color: #f5f5f5;
  }

  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root .Mui-focused {
    border: solid 2px #4d27d9;
  }

  &.MuiFormControl-root {
    color: #828282;

    .Mui-focused fieldset {
      border: solid 2px #4d27d9;
    }

    &:hover fieldset {
      border: 1px solid #4d27d9;
    }

    & label.Mui-focused {
      color: #828282;
    }

    svg {
      color: #c4c4c4;
      z-index: 1;
    }
  }
`;
