import "./style.css";
import { Header, NavMenuModal } from "../../Styles/global";
import { BiMenu, BiCart } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import {
  FaPaw,
  FaSignInAlt,
  FaShoppingCart,
  FaHome,
  FaHandHoldingMedical,
} from "react-icons/fa";
import LogoEcommerce from "../../assets/image/logo-ecommerce.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const NavbarComponent = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [menuModal, setMenuModal] = useState(false);

  window.addEventListener("resize", () => setWidth(window.innerWidth));

  const modalMenuMobile = () => {
    console.log("oi");
    setMenuModal(!menuModal);
  };

  return (
    <Header>
      <nav className="menu_items-mobile">
        {width <= 768 && (
          <>
            <BiMenu className="icon_menu" onClick={() => modalMenuMobile()} />
            <Link to="/">
              <figure>
                <img src={LogoEcommerce} alt="Logo Ecommerce" />
              </figure>
            </Link>
            {menuModal ? (
              <BiCart className="cart_forTablet-remove" />
            ) : (
              <Link to="/cart">
                <BiCart className="icon_menu" />
              </Link>
            )}
          </>
        )}
        {menuModal && (
          <NavMenuModal>
            <div className="header_menu-popup">
              <BiX className="icon_menu" onClick={() => modalMenuMobile()} />
              <Link to="/">
                <figure>
                  <img src={LogoEcommerce} alt="Logo Ecommerce" />
                </figure>
              </Link>
              <Link to="/cart">
                <BiCart className="icon_menu" />
              </Link>
            </div>
            <div className="items_menu-popup">
              <ul>
                <Link to="/" onClick={() => modalMenuMobile()}>
                  <li>
                    <FaHome className="icon_menu" />
                    Home
                  </li>
                </Link>
                <Link to="/login" onClick={() => modalMenuMobile()}>
                  <li>
                    <FaSignInAlt className="icon_menu" />
                    Entrar / Cadastrar
                  </li>
                </Link>

                <li className="divisor_departments">
                  <p>Departamentos</p>
                </li>

                <Link
                  to="/departments/pet-food"
                  onClick={() => modalMenuMobile()}
                >
                  <li>
                    <FaPaw className="icon_menu" />
                    Ração
                  </li>
                </Link>
                <Link
                  to="/departments/medicament"
                  onClick={() => modalMenuMobile()}
                >
                  <li>
                    <FaHandHoldingMedical className="icon_menu" />
                    Medicamentos
                  </li>
                </Link>
                <Link
                  to="/departments/hygiene"
                  onClick={() => modalMenuMobile()}
                >
                  <li>
                    <FaHandHoldingMedical className="icon_menu" />
                    Higigene
                  </li>
                </Link>
              </ul>
            </div>
          </NavMenuModal>
        )}
      </nav>
      <nav className="menu_items-desktop">
        {width > 768 && (
          <>
            <Link to="/">
              <figure>
                <img src={LogoEcommerce} alt="Logo Ecommerce" />
              </figure>
            </Link>
            <div className="menu_items-desktop">
              <ul>
                <Link to="/">
                  <li>Home</li>
                </Link>

                <li className="dropdown_departments">
                  <div className="div_link-departments">
                    <FaPaw className="icon_menu" />
                    Departamentos
                  </div>
                  <div className="dropdown_departments-content">
                    <ul>
                      <Link to="/departments/pet-food">
                        <li>Ração</li>
                      </Link>
                      <Link to="/departments/medicament">
                        <li>Medicamentos</li>
                      </Link>
                      <Link to="/departments/hygiene">
                        <li>Higiene</li>
                      </Link>
                    </ul>
                  </div>
                </li>

                <Link to="/login">
                  <li>
                    <FaSignInAlt className="icon_menu" />
                    Entrar / Cadastrar
                  </li>
                </Link>
                <Link to="/cart">
                  <li>
                    <FaShoppingCart />
                  </li>
                </Link>
              </ul>
            </div>
          </>
        )}
      </nav>
    </Header>
  );
};

export default NavbarComponent;
