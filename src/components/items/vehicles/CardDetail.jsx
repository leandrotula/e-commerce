import {useParams} from "react-router-dom";
import cars from "../../../mocks/vehiclesMock.js";
import {useDispatch, useSelector} from "react-redux";
import {updateCart, resetCart} from "../../../slices/cartSlice.js";
import {useEffect, useState} from "react";

const CartDetail = () => {
    const {id} = useParams();
    const cardFound = cars.find(product => product.id === parseInt(id));
    //const {setItem} = useContext(ItemContext);
    const dispatch = useDispatch()
    const okAddedCart = useSelector((state) => state.cart.isOk);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (okAddedCart) {
            dispatch(resetCart(false));
            setShowAlert(true);
        }
    }, [okAddedCart])

    function manageCart() {
        return () => dispatch(updateCart(cardFound));
    }

    return (
        <div className="col-md-4">
            {showAlert && (
                <div className="alert alert-light" role="alert">
                    agregado!
                </div>
            )}
            <img className="card-img-top" src={cardFound.image} alt={cardFound.name}/>
            <div className="card-body">
                <h5 className="card-title">{cardFound.name}</h5>
            </div>
            <button className="btn btn-primary" onClick={manageCart()}>Agregar a carrito
            </button>
        </div>
    )
}

export default CartDetail;