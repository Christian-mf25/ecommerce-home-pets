import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [action, setAction] = useState(false);
  const token = JSON.parse(localStorage.getItem("@Pets:token"));

  const getCart = () => {
    api
      .get("/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setCart(res.data);
      })
      .catch((err) => console.log(err));
  };

  const addToCart = (data) => {
    api
      .post(
        "/cart",
        {
          description: data.description,
          category: data.category,
          species: data.species,
          price: data.price,
          title: data.title,
          img: data.img,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setAction(!action);
        toast.success(`Adicionado ao carrinho`);
      })
      .catch((err) => console.log(err));
  };

  const removeFromCart = (productId) => {
    api
      .delete(`/cart/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        setAction(!action);
        toast.success("Item removido do carrinho");
      });
  };

  useEffect(() => {
    getCart();
  }, [action]);

  return (
    <CartContext.Provider value={{ removeFromCart, addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext)
