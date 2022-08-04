import "./NavBar.scss";
import { useState } from "react";
import Logo from "../../assets/Logo/Logo";
import MenuBurger from "../../assets/MenuButton/MenuButton";

const NavBar = () => {
  const [localNav, setLocalNav] = useState();
  const [isOpen, setIsOpen] = useState(false);

  // Change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    window.scrollY >= 90 ? setColor(true) : setColor(false);
  };

  window.addEventListener("scroll", changeColor);

  // Location in page nav
  const handleNavLink = (e: any) => {
    setLocalNav(e.target.innerText);
  };

  return (
    <nav>
      <ul className={`NavBar ${color ? "NavBar-bg" : ""}`}>
        <div>
          <Logo />
          <MenuBurger onClick={() => setIsOpen(!isOpen)} checked={isOpen} />
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
