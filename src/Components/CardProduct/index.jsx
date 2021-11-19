import "./style.css";
import "../../Styles/global.js";
import { Link, useHistory } from "react-router-dom";
const CardProduct = ({ bestProduct }) => {
  const history = useHistory();

  console.log(bestProduct.id);

  return (
    <>
      <Link to={`/product/${bestProduct.id}`}>
        <div className="div_cardProduct">
          <figure>
            <img src={bestProduct.img} alt=""></img>
          </figure>
          <div className="div_cardProduct-infos">
            <h4>{bestProduct.title}</h4>
            <p>{bestProduct.category}</p>
          </div>
          <div className="div_cardProduct-price">
            <h2>R$ {bestProduct.price}</h2>
            <p>R$ {(bestProduct.price * 0.9).toFixed(2)} para doadores</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardProduct;
