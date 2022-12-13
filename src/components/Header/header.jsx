import './header.styles.css';
import logo from '../../assets/logo2.png';
import { useState } from 'react';
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

    const [menu, setMenu] = useState(false);
    const toggleMode = () => {
        setMenu(!menu)
    }

    function HambMenu() {

    }




    return (
        <header className={navbar ? 'header-container sticky' : 'header-container'}>

            <div className="wrap-navbar">
                <img className='header-logo' src={logo} alt={logo} />
                <div className="header-menu">
                    <ul>
                        <li>Home</li>
                        <li>Sobre</li>
                        <li>GitHub</li>
                        <li>Projetos</li>
                        <li>Contato</li>
                    </ul>
                </div>
                <div className='menu-btn active'>
                    <FiMenu />
                </div>
            </div>
        </header >
    )
}

export default Header;