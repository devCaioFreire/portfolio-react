import './header.styles.css';
import logo from '../../assets/logo2.png';
import { useState } from 'react';

function Header() {

    const [navbar, setNavbar] = useState(false);

    const changeNavbar = () => {
        if (window.scrollY > 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

   

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
            </div>
        </header>
    )
}

export default Header;