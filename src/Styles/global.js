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
    --color-white-80: rgba(255,255,255, 0.8);
    --color-white-95: rgba(255,255,255, 0.95);
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

export const Header = styled.header`
    height: 80px;
    background-color: var(--color-secondary);
    display: flex;
    
    
    > nav.menu_items-mobile {
      width: 100%;
      color: var(--color-gray-0);
      font-size: 30px;
      padding: 0 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      >svg {
        cursor: pointer;
      }

      .cart_forTablet-remove {
        visibility: hidden;
      }

      > figure{
        cursor: pointer;
        
        > img {
          width: 80px;

        }
      }

      @media (min-width: 769px) {
        display: none;
      }
    }


    nav.menu_items-desktop {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0 15px;
      font-size: 30px;

      > figure {

      }

      > div.menu_items-desktop {
        
        > ul {
          display: flex;

          > a li {
            cursor: pointer;
            display: flex;
            align-items: center;
            color: var(--color-white-80);
            padding: 0 10px;
            font-weight: 500;
            font-size: 18px;
            letter-spacing: 0.07rem;
          }
          .icon_menu {
            padding-right: 5px;
          }
          > li.dropdown_departments {
            cursor: pointer;
            display: relative;
            margin: auto 0;
            color: var(--color-white-80);
            padding: 0 10px;
            font-weight: 500;
            font-size: 18px;
            letter-spacing: 0.07rem;

            > .div_link-departments {
              display: flex;
              align-items: center;
            }

            > div.dropdown_departments-content {
              display: none;
              position: absolute;
              min-width: 160px;
              box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
              padding: 12px 16px;
              z-index: 1;

              > ul a li {
                color: var(--color-white-80);
                padding: 6px 0;
              }

            }
          }

          > .dropdown_departments:hover .dropdown_departments-content {
            display: block;
            background-color: var(--color-secondary);
            padding-top: 29px;

          }

        }

      }

      svg {
        font-size: 21px;
      }

      @media (max-width: 768px) {
        display: none;
      }
    }

    
`
export const NavMenuModal = styled.nav`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: var(--color-secondary);
  left: 0;
  top: 0;

  > .header_menu-popup {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 15px;
    box-sizing: border-box;
  }

  > .items_menu-popup {

    > ul {

      li {
        margin: 10px 0;
        padding-left: 15px;
        color: var(--color-white-95);

        > .icon_menu {
          margin-right: 10px;
        }
      }

      .divisor_departments{
        background-color: #FFFFFF50;
        width: 100%;
        font-size: 24px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 40px;
        font-weight: bold;
      }
    }

  
  }
  @media (min-width: 500px){
    width: 500px
  }
`