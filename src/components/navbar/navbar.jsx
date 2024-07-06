import './Navbar.css';
import {CardWidget} from "../cardwidget/cartdwidget.jsx";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#" className="navbar-logo">CBA-VENDE</a>
                <div className="navbar-links">
                    <a href="#">Inicio</a>
                    <a href="#">Sobre</a>
                    <a href="#">Servicios</a>
                    <a href="#">Contacto</a>
                </div>
            </div>
            <CardWidget></CardWidget>
        </nav>
    );
}

export default Navbar;
