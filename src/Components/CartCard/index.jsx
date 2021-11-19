import { useCart } from "../../Providers/Cart";
import { Product } from "./style";

const CartCard = ({ item }) => {
  const { cart, addToCart, removeFromCart } = useCart();
  const { id, category, img, title } = item;

  const quantity = cart.filter((item) => item.id === id);

  return (
    <Product>
      <img src={img} alt={title} />
      <div className="text">
        <h4>{title}</h4>
        <p>{category}</p>
      </div>

      <div className="buttons">
        <button className="sub" onClick={() => removeFromCart(id)}>-</button>
        <span>{quantity.length}</span>
        <button className="add" onClick={() => addToCart(item)}>
          +
        </button>
      </div>
    </Product>
  );
};

export default CartCard;
