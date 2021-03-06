import { useParams } from "react-router";
import { useProducts } from "../../Providers/Products";
import { PrimaryButton } from "../../Styles/global";
import { ProductContainer } from "./styles";
import { useCart } from "../../Providers/Cart";
import NavbarComponent from "../../Components/Navbar";
import Footer from "../Footer";

const ProductCard = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const { addToCart } = useCart();
  const productToBeDisplayed = products.filter(
    (item) => item.id === Number(id)
  );

  const newPrice = productToBeDisplayed[0]?.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const priceDiscount = productToBeDisplayed[0]?.price * 0.2;

  const newPriceDisc = priceDiscount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <>
      <NavbarComponent />
      <ProductContainer>
        {productToBeDisplayed.map((product, index) => (
          <div key={index}>
            <img alt={products.title} src={product.img} />
            <div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>{product.category}</p>
              <h4> {newPrice}</h4>
              <h5>Valor a ser doado: {newPriceDisc}</h5>
              <PrimaryButton onClick={() => addToCart(product)}>
                Adicionar ao carrinho
              </PrimaryButton>
            </div>
          </div>
        ))}
      </ProductContainer>
      <Footer />
    </>
  );
};

export default ProductCard;
