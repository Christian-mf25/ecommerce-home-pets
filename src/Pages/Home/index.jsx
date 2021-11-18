import NavbarComponent from "../../Components/Navbar";
import HeaderBannerHome from "../../Components/HeaderBannerHome/index.jsx";
import BestSellersProducts from "../../Components/BestSellersProducts";
import PortionOnly from "../../Components/PortionOnly";
import MedicamentOnly from "../../Components/MedicamentOnly";
import HygieneOnly from "../../Components/HygieneOnly";

const Home = () => {
  return (
    <section>
      <NavbarComponent></NavbarComponent>
      <HeaderBannerHome />
      <BestSellersProducts />
      <PortionOnly />
      <MedicamentOnly />
      <HygieneOnly />
    </section>
  );
};
export default Home;
