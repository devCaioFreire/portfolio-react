import { useState } from 'react';
import './header.styles.css';
import logo from '../../assets/logo2.png';
import { FiMenu } from 'react-icons/fi';

function Header() {

    // Navbar Active
    const [navbar, setNavbar] = useState(false);
    const changeNavbar = () => {
        if (window.scrollY > 20) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    window.addEventListener('scroll', changeNavbar);

    const [mobileMenu, setMobileMenu] = useState(false);
    const buttonMobileMenu = () => setMobileMenu(!mobileMenu);

    return (
        <header className={navbar ? 'headerContainer sticky' : 'headerContainer'}>
            <nav className="navContainer">
                <div className="center">
                    <ul className="list">
                        <li className="item">
                            <img src={logo} alt={logo} className="logo" />
                        </li>
                        <li className="item">
                            <button
                                className="btnMenuMobile"
                                onClick={buttonMobileMenu}
                            >
                                <FiMenu />
                            </button>
                        </li>
                    </ul>
                    <menu
                        className={
                            !mobileMenu ? "falseMenuMobile" : "trueMenuMobile"
                        }
                    >
                        <ul className="list">
                            <li className="item">
                                <a href="#">Início</a>
                            </li>
                            <li className="item">
                                <a href="#">Sobre</a>
                            </li>
                            <li className="item">
                                <a href="#">Github</a>
                            </li>
                            <li className="item">
                                <a href="#">Projetos</a>
                            </li>
                            <li className="item">
                                <a href="#">Contato</a>
                            </li>
                        </ul>
                    </menu>
                </div>
            </nav>
        </header>
    );
}

export default Header;



