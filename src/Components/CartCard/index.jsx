import { useCart } from "../../Providers/Cart";
import { Product } from "./style";

const CartCard = ({ item }) => {
  const { cart } = useCart();
  const { id, category, description, img, price, species, title } = item;

  const quantity = cart.filter((item) => item.id === id);

  console.log(quantity.length);
  return (
    <Product>
      <img src={img} alt={title} />
      <div className="text">
        <h4>{title}</h4>
        <p>{category}</p>
      </div>
      <div className="buttons">
        <button className="sub">-</button>
        <span>{quantity.length}</span>
        <button className="add">+</button>
      </div>
    </Product>
  );
};

export default CartCard;
