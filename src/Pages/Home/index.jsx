import { PrimaryButton } from "../../Styles/global";
import { useHistory } from "react-router";
const Home = () => {
  const history = useHistory();
  const sendTo = (path) => {
    history.push("/");
  };
  return (
    <section>
      <h1>Home</h1>
      <PrimaryButton onClick={() => history.push("/login")}>
        Ir para login
      </PrimaryButton>
    </section>
  );
};
export default Home;
