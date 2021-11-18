import { useParams } from "react-router";
import { useProducts } from "../../Providers/GetProducts";
import { PrimaryButton } from "../../Styles/global";
import { ProductContainer } from "./styles";
import NavbarComponent from "../../Components/Navbar";
import Footer from "../Footer";

const ProductCard = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const productToBeDisplayed = products.filter(
    (item) => item.id === Number(id)
  );

  return (
    <>
      <NavbarComponent />
      <ProductContainer>
        {productToBeDisplayed.map((product, index) => (
          <div key={index}>
            <img alt={products.title} src={product.img} />
            <div>
              <h3>{product.title}</h3>
              <p>{product.category}</p>
              <h4>R$ {product.price}</h4>
              <h5>Valor a ser doado: R$ {(product.price * 0.2).toFixed(2)}</h5>
              <PrimaryButton>Adicionar ao carrinho</PrimaryButton>
            </div>
          </div>
        ))}
      </ProductContainer>
      <Footer />
    </>
  );
};

export default ProductCard;
