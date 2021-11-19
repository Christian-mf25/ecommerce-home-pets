import "./style.css";
import { useState, useContext, useEffect } from "react";
import CardProduct from "../CardProduct/index.jsx";
import { ProductsContext } from "../../Providers/Products/index.jsx";

const BestSellersProducts = () => {
  // id: 28, 56, 61, 60, 8, 10
  const { products } = useContext(ProductsContext);

  const [bestProducts, setBestProducts] = useState([]);

  return (
    <section className="products_bestSellers-home">
      <h2>Mais vendidos:</h2>
      <div className="grid_bestSellers_products">
        {products.map(
          (item, index) =>
            item.bestSeller && <CardProduct key={index} bestProduct={item} />
        )}
      </div>
    </section>
  );
};

export default BestSellersProducts;
