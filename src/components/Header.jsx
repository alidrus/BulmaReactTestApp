import { IconSoup } from '@tabler/icons-react';
import DigitalClock from './DigitalClock';

function Header() {
    return(
        <>
            <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a href="/" className="navbar-item"><IconSoup /></a>
                </div>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarTopMenu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">Home</a>
                        <a className="navbar-item">About</a>
                        <a className="navbar-item">Services</a>
                        <a className="navbar-item">Contact</a>
                    </div>
                    <div className="navbar-end">
                        <a className="navbar-item"><DigitalClock /></a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;