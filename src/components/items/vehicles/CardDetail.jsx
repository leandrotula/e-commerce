import {useParams} from "react-router-dom";
import cars from "../../../mocks/vehiclesMock.js";
import {useDispatch, useSelector} from "react-redux";
import {updateCart} from "../../../slices/cartSlice.js";

const CartDetail = () => {
    const {id} = useParams();
    const cardFound = cars.find(product => product.id === parseInt(id));
    const dispatch = useDispatch()
    const items = useSelector((state) => state.cart.items);
    const itemInCart = items.find(item => item.id === cardFound.id);

    function manageCart() {
        return () => {
                dispatch(updateCart(cardFound));

        };
    }

    console.log(itemInCart)

    return (
        <div className="col-md-4">
            <img className="card-img-top" src={cardFound.image} alt={cardFound.name}/>
            <div className="card-body">
                <h5 className="card-title">{cardFound.name}</h5>
            </div>
            {itemInCart && <p>Cantidad en carrito: {itemInCart.quantity}</p>}
            {itemInCart && <p>precio total: {itemInCart.price}</p>}
            <button className="btn btn-primary" onClick={manageCart()}>Agregar a carrito
            </button>
        </div>
    )
}

export default CartDetail;