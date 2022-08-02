import "./NavBar.scss";
import { useState } from "react";
import Logo from "../../assets/Logo/Logo";
import MenuBurger from "../../assets/MenuButton/MenuButton";

const NavBar = () => {
  const [localNav, setLocalNav] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavLink = (e: any) => {
    setLocalNav(e.target.innerText);
  };

  const changeOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <ul className='NavBar'>
        <div>
          <Logo />
          <MenuBurger onClick={changeOpenMenu} checked={isOpen} />
        </div>
        <div
          className={`Menus__colapse ${isOpen ? "" : "Menus__colapse--Close"}`}
        >
          <li
            className={localNav === "Sobre" ? "active" : ""}
            onClick={handleNavLink}
          >
            Sobre
          </li>
          <li
            className={localNav === "Skills" ? "active" : ""}
            onClick={handleNavLink}
          >
            Skills
          </li>
          <li
            className={localNav === "Projetos" ? "active" : ""}
            onClick={handleNavLink}
          >
            Projetos
          </li>
          <li
            className={localNav === "Contato" ? "active" : ""}
            onClick={handleNavLink}
          >
            Contato
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
