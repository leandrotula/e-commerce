import './Navbar.css';
import {CardWidget} from "../cardwidget/CardWidget.jsx";
import {Link, Outlet} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <a href="#" className="navbar-logo">CBA-VENDE</a>
                    <div className="navbar-links">
                        <Link to={"/"}>Inicio</Link>
                        <Link to={"autos"}>Autos</Link>
                        <Link to={"electrodomesticos"}>Electrodomesticos</Link>
                        <Link to={"compra"}>Detalle compra</Link>
                    </div>
                </div>
                <CardWidget></CardWidget>
            </nav>
            <Outlet></Outlet>
        </>

    );
}

export default Navbar;
