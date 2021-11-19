import { useState, useContext, useEffect } from "react";
import CardProduct from "../CardProduct/index.jsx";
import { ProductsContext } from "../../Providers/Products/index.jsx";

const MedicamentOnly = () => {
  // id: 28, 56, 61, 60, 8, 10
  const { products } = useContext(ProductsContext);

  return (
    <section className="products_bestSellers-home">
      <h2>Medicamentos:</h2>
      <div className="grid_bestSellers_products">
        {products.map(
          (item, index) =>
            item.category === "medicação" && (
              <CardProduct key={index} bestProduct={item} />
            )
        )}
      </div>
    </section>
  );
};

export default MedicamentOnly;
