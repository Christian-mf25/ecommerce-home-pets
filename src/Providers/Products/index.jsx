import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import api from "../../Services/api";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const history = useHistory();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products/").then((response) => setProducts(response.data));
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
