import './cardwidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {useSelector} from "react-redux";

export const CardWidget = () => {

   const quantity = useSelector(state => state.cart.items).length
    return (
        <div className="icon-container">
            <FontAwesomeIcon icon={faShoppingCart} className="shopping-cart-icon"/>
            <span className="quantity">{quantity}</span>
        </div>
    );
}