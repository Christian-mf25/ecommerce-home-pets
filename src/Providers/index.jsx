import { CartProvider } from "./Cart";
import { ProductsProvider } from "./GetProducts";
import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";
import { ProductsProvider } from "./Products/index.jsx";

const Providers = ({ children }) => {
  return (
    <>
      <LoginProvider>
        <RegisterProvider>
          <ProductsProvider>
            <CartProvider>{children}</CartProvider>
          </ProductsProvider>
        </RegisterProvider>
      </LoginProvider>
    </>
  );
};

export default Providers;
