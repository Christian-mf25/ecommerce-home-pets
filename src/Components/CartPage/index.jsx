import { InputLabel, MenuItem, Select } from "@material-ui/core";
import { useOngCompanies } from "../../Providers/OngCompanies";
import { useCart } from "../../Providers/Cart";
import CartCard from "../CartCard";
import {
  PrimaryButton,
  SecondaryButton,
  StyledFormControl,
} from "../../Styles/global";
import { DivSpace, Section } from "./style";

const CartPage = () => {
  const { cart, total } = useCart();
  const { users, handleChange, ong } = useOngCompanies();

  const objJson = cart.map((item) => JSON.stringify(item));
  const jsonSet = new Set(objJson);
  const jsonArray = Array.from(jsonSet);
  const newCart = jsonArray.map((item) => JSON.parse(item));
  const frete = 25;

  return (
    <>
      <Section>
        <DivSpace>
          <h1>Meu Carrinho</h1>

          <div className="flex">
            <p className="description">Subtotal:</p>
            <span className="bold">
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>

          <div className="flex">
            <p className="description">Desconto:</p>
            <p className="bold">{`0 %`}</p>
          </div>

          <div className="flex">
            <p className="description">
              Frete* <span className="small">Taxa fixa</span>:
            </p>
            <span className="bold">
              {frete.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>

          <div className="flex">
            <h3 className="bold total">Total:</h3>
            <span className="bold">
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>

          <p className="description">Deseja doar esses itens?</p>

          <StyledFormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel>Selecionar ong</InputLabel>
            <Select
              native
              label="Selecionar ong"
              onChange={handleChange}
              value={ong}
              inputProps={{
                id: "select-multiple-native",
              }}
            >
              <option defaultValue>Selecionar ong</option>
              {users.map((item) => (
                <option value={item.name}>{item.name}</option>
              ))}
            </Select>
          </StyledFormControl>

          <PrimaryButton type="button">
            Continuar para o pagamento
          </PrimaryButton>

          <SecondaryButton className="button-back">Voltar e escolher mais produtos</SecondaryButton>

        </DivSpace>

        <p className="description">Para doções valor mínimo de R$ 60,00</p>
      </Section>

      <ul>
        {newCart.map((item, index) => (
          <>
            <CartCard item={item} key={item.id} />
          </>
        ))}
      </ul>
    </>
  );
};

export default CartPage;
