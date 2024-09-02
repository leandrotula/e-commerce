import VehicleItem from "./VehicleItem.jsx";
import {useDispatch, useSelector} from "react-redux";
import getAllItems from "../../../service/cartItemsService.js";
import {useEffect} from "react";
import {setAllItems} from "../../../slices/cartSlice.js";

const Vehicles = () => {

    const cars = useSelector((state) => state.cart.items);
    const dispatch = useDispatch()

    useEffect(() => {
            getAllItems().then((response) => {
                dispatch(setAllItems(response));
            })
        },
        [])

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