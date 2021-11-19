import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
  const [action, setAction] = useState(false);
  const token = JSON.parse(localStorage.getItem("@Pets:token"));
	const idUser = JSON.parse(localStorage.getItem("@Pets:userId"))

	console.log(idUser)
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
		console.log(data)
    api
      .post(
        "/cart/",
        {
          description: data.description,
          category: data.category,
          species: data.species,
          price: data.price,
          title: data.title,
          img: data.img,
					id: data.id,
					userId: idUser
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

  const total = cart.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return (
    <CartContext.Provider value={{ removeFromCart, addToCart, cart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
