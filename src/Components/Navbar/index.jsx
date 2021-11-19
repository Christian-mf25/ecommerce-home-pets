import "./styles.css";
import { Header, NavMenuModal } from "../../Styles/global";
import { BiMenu, BiCart } from "react-icons/bi";
import { FaSignOutAlt } from "react-icons/fa";
import {
  FaPaw,
  FaSignInAlt,
  FaShoppingCart,
  FaHome,
  FaHandHoldingMedical,
} from "react-icons/fa";
import LogoEcommerce from "../../assets/image/logo-ecommerce.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../Providers/Login";
const NavbarComponent = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [menuModal, setMenuModal] = useState(false);
  const { logOut } = useLogin();

  useEffect(() => {
    console.log(window.innerWidth);
  }, [window.innerWidth]);

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
            <BiMenu onClick={() => modalMenuMobile()} />
            <Link to="/">
              <figure>
                <img src={LogoEcommerce} alt="Logo Ecommerce" />
              </figure>
            </Link>
            {menuModal ? (
              <BiCart className="cart_forTablet-remove" />
            ) : (
              <BiCart />
            )}
          </>
        )}
        {menuModal && (
          <NavMenuModal>
            <div className="header_menu-popup">
              <BiMenu onClick={() => modalMenuMobile()} />
              <Link to="/">
                <figure>
                  <img src={LogoEcommerce} alt="Logo Ecommerce" />
                </figure>
              </Link>
              <BiCart />
            </div>
            <div className="items_menu-popup">
              <ul>
                <Link>
                  <li to="/">
                    <FaHome className="icon_menu" />
                    Home
                  </li>
                </Link>
                <Link to="/login">
                  <li>
                    <FaSignInAlt className="icon_menu" />
                    Entrar / Cadastrar
                  </li>
                </Link>

                <li className="divisor_departments">
                  <p>Departamentos</p>
                </li>

                <Link to="/departments/pet-food">
                  <li>
                    <FaPaw className="icon_menu" />
                    Ração
                  </li>
                </Link>
                <Link to="/departments/medicament">
                  <li>
                    <FaHandHoldingMedical className="icon_menu" />
                    Medicamentos
                  </li>
                </Link>
                <Link to="/departments/hygiene">
                  <li>
                    <FaHandHoldingMedical className="icon_menu" />
                    Higigene
                  </li>
                </Link>
                <li onClick={logOut} className="logout">
                  <FaSignOutAlt className="icon_menu" />
                  Logout
                </li>
              </ul>
            </div>
          </NavMenuModal>
        )}
      </nav>
      <nav className="menu_items-desktop">
        {width > 768 && (
          <>
            {console.log(width)}
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

                <Link to="login">
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
                <Link onClick={logOut}>
                  <li className="logout">
                    <FaSignOutAlt className="icon_menu" />
                    Logout
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
