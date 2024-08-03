import cars from "../../../mocks/vehiclesMock.js";
import VehicleItem from "./VehicleItem.jsx";

const Vehicles = () => {
    return (
        <div>
            {cars.map((item, index) => (
                <div className="container" key={index}>
                    <div className="row">
                        <VehicleItem item={item} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Vehicles;