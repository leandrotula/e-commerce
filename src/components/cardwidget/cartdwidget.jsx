import './cardwidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const CardWidget = () => {

    return (
        <div className="icon-container">
            <FontAwesomeIcon icon={faShoppingCart} className="shopping-cart-icon"/>
            <span className="quantity">5</span>
        </div>
    );
}