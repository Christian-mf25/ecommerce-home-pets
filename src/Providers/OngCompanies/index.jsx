import { useContext, createContext, useState, useEffect } from "react";
import api from "../../Services/api";

export const OngCompaniesContext = createContext();

export const OngCompaniesProvider = ({ children }) => {
  const [donate, setDonate] = useState([]);
	const [ong, setOng] = useState("")

  useEffect(() => {
    api
      .get("users")
      .then((res) => setDonate(res.data))
      .catch((err) => console.log(err));
  }, []);

  const users = donate.filter((item) => item.type !== "PF" && item.name !== undefined);

	const handleChange = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setOng(value);
  };
  return (
    <OngCompaniesContext.Provider value={{ users, handleChange, ong }}>
      {children}
    </OngCompaniesContext.Provider>
  );
};

export const useOngCompanies = () => useContext(OngCompaniesContext);
