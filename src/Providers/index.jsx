import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";
import { ProductsProvider } from "./Products/index.jsx";

const Providers = ({ children }) => {
  return (
    <>
      <ProductsProvider>
        <LoginProvider>
          <RegisterProvider>{children}</RegisterProvider>
        </LoginProvider>
      </ProductsProvider>
    </>
  );
};

export default Providers;
