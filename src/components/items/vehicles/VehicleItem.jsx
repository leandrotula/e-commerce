import {Link} from "react-router-dom";

const VehicleItem = ({item = {}}) => {

    return (
        <Link to={`/autos/${item.id}`}>
            <div className="col-md-4">
                <img className="card-img-top" src={item.image} alt={item.name}/>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                </div>
            </div>
        </Link>
    )

}

export default VehicleItem;