import "./style.css";
import "../../Styles/global.js";
const CardProduct = ({ bestProduct }) => {
  // id: 28, 56, 61, 60, 8, 10

  console.log("hi", bestProduct);
  return (
    <>
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
    </>
  );
};

export default CardProduct;
