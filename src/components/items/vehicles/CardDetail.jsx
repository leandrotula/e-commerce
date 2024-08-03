import {useParams} from "react-router-dom";
import cars from "../../../mocks/vehiclesMock.js";

const CartDetail = () => {
    const {id} = useParams();
    const cardFound = cars.find(product => product.id === parseInt(id));

    return (
        <div className="col-md-4">
            <img className="card-img-top" src={cardFound.image} alt={cardFound.name}/>
            <div className="card-body">
                <h5 className="card-title">{cardFound.name}</h5>
            </div>
        </div>
    )
}

export default CartDetail;