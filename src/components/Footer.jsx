function Footer() {
    return (
        <>
            <nav className="navbar is-transparent is-fixed-bottom">
                <div className="navbar-start">
                    <p className="navbar-item">&copy; {new Date().getFullYear()}, Foodie Inc.</p>
                </div>
            </nav>
        </>
    );
}

export default Footer;