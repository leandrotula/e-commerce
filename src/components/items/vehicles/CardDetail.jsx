import {useParams} from "react-router-dom";
import cars from "../../../mocks/vehiclesMock.js";
import {useContext} from "react";
import {ItemContext} from "../../../context/ItemContext.jsx";

const CartDetail = () => {
    const {id} = useParams();
    const cardFound = cars.find(product => product.id === parseInt(id));
    const {setItem} = useContext(ItemContext);

    return (
        <div className="col-md-4">
            <img className="card-img-top" src={cardFound.image} alt={cardFound.name}/>
            <div className="card-body">
                <h5 className="card-title">{cardFound.name}</h5>
            </div>
            <button className="btn btn-primary" onClick={ () => {
                console.log(cardFound)
                setItem(oldItem => [...oldItem, cardFound]) }}>Agregar a carrito</button>
        </div>
    )
}

export default CartDetail;