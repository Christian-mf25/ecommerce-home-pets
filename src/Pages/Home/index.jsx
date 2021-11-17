import { PrimaryButton } from "../../Styles/global";
import { useHistory } from "react-router";
import NavbarComponent from "../../Components/Navbar";
import HeaderBannerHome from "../../Components/HeaderBannerHome/index.jsx";

const Home = () => {
  return (
    <section>
      <NavbarComponent></NavbarComponent>
      <HeaderBannerHome />
    </section>
  );
};
export default Home;
