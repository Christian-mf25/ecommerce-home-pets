import { PrimaryButton } from "../../Styles/global";
import { useHistory } from "react-router";
import NavbarComponent from "../../Components/Navbar";
import HeaderBannerHome from "../../Components/HeaderBannerHome/index.jsx";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <section>
      <NavbarComponent></NavbarComponent>
      <HeaderBannerHome />
      <Footer />
    </section>
  );
};
export default Home;
