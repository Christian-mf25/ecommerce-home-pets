import NavbarComponent from "../../Components/Navbar";
import HeaderBannerHome from "../../Components/HeaderBannerHome/index.jsx";
import BestSellersProducts from "../../Components/BestSellersProducts";
import PortionOnly from "../../Components/PortionOnly";
import MedicamentOnly from "../../Components/MedicamentOnly";
import HygieneOnly from "../../Components/HygieneOnly";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <section>
      <NavbarComponent></NavbarComponent>
      <HeaderBannerHome />
      <BestSellersProducts />
      <PortionOnly />
      <MedicamentOnly />
      <HygieneOnly />
      <Footer />
    </section>
  );
};
export default Home;
