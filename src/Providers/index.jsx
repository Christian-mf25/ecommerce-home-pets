import { OngCompaniesProvider } from "./OngCompanies";
import { ProductsProvider } from "./GetProducts";
import { RegisterProvider } from "./Register";
import { LoginProvider } from "./Login";
import { CartProvider } from "./Cart";

const Providers = ({ children }) => {
  return (
    <>
      <LoginProvider>
        <RegisterProvider>
          <ProductsProvider>
            <OngCompaniesProvider>
              <CartProvider>{children}</CartProvider>
            </OngCompaniesProvider>
          </ProductsProvider>
        </RegisterProvider>
      </LoginProvider>
    </>
  );
};

export default Providers;
