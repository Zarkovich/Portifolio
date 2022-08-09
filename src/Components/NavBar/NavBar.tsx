import "./NavBar.scss";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Logo from "../../assets/Logo/Logo";
import MenuBurger from "../../assets/MenuButton/MenuButton";

const NavBar = () => {
    const [localNav, setLocalNav] = useState("Sobre");
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
    useEffect(() => {
        setIsOpen(false);
    }, [localNav]);

    return (
        <nav>
            <ul className={`NavBar ${color ? "NavBar-bg" : ""}`}>
                <div>
                    <Logo />
                    <MenuBurger
                        onClick={() => setIsOpen(!isOpen)}
                        isOpen={isOpen}
                    />
                </div>
                <div
                    className={`Menus__colapse ${
                        isOpen ? "" : "Menus__colapse--Close"
                    }`}
                >
                    <Link
                        to='About'
                        spy={true}
                        smooth={true}
                        offset={5}
                        duration={500}
                    >
                        <li
                            className={localNav === "Sobre" ? "active" : ""}
                            onClick={handleNavLink}
                        >
                            Sobre
                        </li>
                    </Link>
                    <Link
                        to='Skills'
                        spy={true}
                        smooth={true}
                        offset={5}
                        duration={500}
                    >
                        <li
                            className={localNav === "Skills" ? "active" : ""}
                            onClick={handleNavLink}
                        >
                            Skills
                        </li>
                    </Link>
                    <Link
                        to='Projetos'
                        spy={true}
                        smooth={true}
                        offset={5}
                        duration={500}
                    >
                        <li
                            className={localNav === "Projetos" ? "active" : ""}
                            onClick={handleNavLink}
                        >
                            Projetos
                        </li>
                    </Link>
                    <Link
                        to='Contact'
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        <li
                            className={localNav === "Contato" ? "active" : ""}
                            onClick={handleNavLink}
                        >
                            Contato
                        </li>
                    </Link>
                </div>
            </ul>
        </nav>
    );
};

export default NavBar;
