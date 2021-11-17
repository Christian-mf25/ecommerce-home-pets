import { ProductsProvider } from "./GetProducts";
import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";

const Providers = ({ children }) => {
  return (
    <>
      <LoginProvider>
        <RegisterProvider>
          <ProductsProvider>{children}</ProductsProvider>
        </RegisterProvider>
      </LoginProvider>
    </>
  );
};

export default Providers;
