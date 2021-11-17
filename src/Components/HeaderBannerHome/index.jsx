import "./style.css";
import BannerHome from "../../assets/image/bannerhome2.png";
import { FaAngleRight } from "react-icons/fa";

const HeaderBannerHome = () => {
  return (
    <section className="BannerHome">
      <div>
        <figure>
          <img src={BannerHome} alt="banner_promo_HomePets"></img>
        </figure>
      </div>
      <div className="cardAdopt">
        <div>
          <h3>Seja um doador e ganhe benefícios exclusivos.</h3>
          <p>Disponível apenas para doações através do nosso ecommerce*</p>
        </div>
        <div className="arrow">
          <FaAngleRight />
        </div>
      </div>
    </section>
  );
};

export default HeaderBannerHome;
