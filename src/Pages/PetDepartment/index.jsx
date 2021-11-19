import { useContext } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "../../Components/CardProduct";
import NavbarComponent from "../../Components/Navbar";
import { ProductsContext } from "../../Providers/Products";

const PetDepartment = () => {
  const { category } = useParams();
  const { products } = useContext(ProductsContext);

  const nameCategory =
    category === "pets-food"
      ? "ração"
      : category === "medicament"
      ? "medicação"
      : "hygiene";

  const nameTextPageCategory =
    nameCategory === "ração"
      ? "Ração"
      : nameCategory === "medicação"
      ? "Medicação"
      : "Higiene";

  return (
    <>
      <NavbarComponent />
      <section className="products_bestSellers-home">
        <h2>{nameTextPageCategory}:</h2>
        <div className="grid_bestSellers_products">
          {products.map(
            (item, index) =>
              item.category === nameCategory && (
                <CardProduct key={index} bestProduct={item} />
              )
          )}
        </div>
      </section>
    </>
  );
};

export default PetDepartment;
