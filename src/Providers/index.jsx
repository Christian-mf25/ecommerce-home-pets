import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";

const Providers = ({ children }) => {
  return (
    <>
      <LoginProvider>
        <RegisterProvider>{children}</RegisterProvider>
      </LoginProvider>
    </>
  );
};

export default Providers;
