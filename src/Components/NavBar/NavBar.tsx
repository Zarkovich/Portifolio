import "./NavBar.scss";
import { useState } from "react";
import Logo from "../Logo/Logo";

const NavBar = () => {
  const [localNav, setLocalNav] = useState();

  const handleNavLink = (e: any) => {
    setLocalNav(e.target.innerText);
  };

  return (
    <nav>
      <ul className='NavBar'>
        <Logo />
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
      </ul>
    </nav>
  );
};

export default NavBar;
