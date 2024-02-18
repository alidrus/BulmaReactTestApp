import { IconSoup } from '@tabler/icons-react';

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
                        <a href="#" className="navbar-item">Home</a>
                        <a href="#" className="navbar-item">About</a>
                        <a href="#" className="navbar-item">Services</a>
                        <a href="#" className="navbar-item">Contact</a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;