import { ProductsProvider } from "./Products/index.jsx";
import { OngCompaniesProvider } from "./OngCompanies";
import { RegisterProvider } from "./Register";
import { LoginProvider } from "./Login";
import { CartProvider } from "./Cart";

const Providers = ({ children }) => {
  return (
    <>
      <ProductsProvider>
        <LoginProvider>
          <RegisterProvider>
            <OngCompaniesProvider>
              <CartProvider>{children}</CartProvider>
            </OngCompaniesProvider>
          </RegisterProvider>
        </LoginProvider>
      </ProductsProvider>
    </>
  );
};

export default Providers;