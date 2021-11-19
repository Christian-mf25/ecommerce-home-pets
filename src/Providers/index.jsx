import { CartProvider } from "./Cart";
import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";
import { ProductsProvider } from "./Products/index.jsx";

const Providers = ({ children }) => {
  return (
    <>
      <ProductsProvider>
        <LoginProvider>
          <RegisterProvider>
            <CartProvider>{children}</CartProvider>
          </RegisterProvider>
        </LoginProvider>
      </ProductsProvider>
    </>
  );
};

export default Providers;
