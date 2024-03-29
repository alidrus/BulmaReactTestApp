import {
    IconTimeline,
 } from '@tabler/icons-react';
import DigitalClock from './DigitalClock';

function Header({ clickHandler = (menuItem) => { } }) {
    return (
        <>
            <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a href="/" className="navbar-item"><IconTimeline /></a>
                </div>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarTopMenu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <a onClick={() => clickHandler('food-list')} className="navbar-item">Food List</a>
                        <a onClick={() => clickHandler('stopwatch')} className="navbar-item">Stopwatch</a>
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