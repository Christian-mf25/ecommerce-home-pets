import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import api from "../../Services/api";

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const history = useHistory();
  const [userType, setUserType] = useState("");
  const [showType, setShowType] = useState(true);

  const sendTo = (path) => {
    history.push(path);
  };

  const showModalType = () => {
    userType.length > 0 && setShowType(!showType);
  };

  const handleChange = (event) => {
    setUserType(event.target.value);
  };

  const registerForm = (data) => {
    api
      .post("/register", data)
      .then((_) => {
        toast.success("Usuário cadastrado");
        sendTo("/login");
      })
      .catch((err) => toast.error("Tente outro e-mail"));
  };

  return (
    <RegisterContext.Provider
      value={{
        userType,
        registerForm,
        showModalType,
        handleChange,
        userType,
        showType,
        sendTo,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterContext);
