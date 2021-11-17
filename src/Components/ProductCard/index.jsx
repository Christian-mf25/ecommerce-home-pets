import { useParams } from "react-router";
import { useProducts } from "../../Providers/GetProducts";
import { PrimaryButton } from "../../Styles/global";
import { ProductContainer } from "./styles";

const ProductCard = () => {
  const { id } = useParams();
  const { products } = useProducts();
  console.log(typeof id);
  const productToBeDisplayed = products.filter(
    (item) => item.id === Number(id)
  );

  return (
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
  );
};

export default ProductCard;
