import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeItem, setCurrentItem, updateOperationState} from "../../../slices/cartSlice.js";
import fetchCartItems from "../../../service/cartItemsService.js";
import {useEffect} from "react";

const CartDetail = () => {

    const getItems = async () => {
        try {
            return await fetchCartItems()
        } catch (error) {
            console.error("Error fetching items: ", error);
        }
    }

    const {id} = useParams();
    const dispatch = useDispatch()
    const itemToShow = useSelector((state) => state.cart.currentItem);

    function add() {
        return () => {
                dispatch(addToCart(itemToShow));

        };
    }

    function remove() {
        return () => {
            dispatch(removeItem(itemToShow));

        };
    }

    useEffect(() => {
        getItems()
            .then((it) => {
                const foundItem = it.find((product) => parseInt(product.id) === parseInt(id));
                if (foundItem) {
                    dispatch(setCurrentItem(foundItem));
                    dispatch(updateOperationState('ok'));
                } else {
                    console.log("No se actualiza estado");
                }
            })
            .catch(console.error);
    }, []);


    return (
        <div className="col-md-4">
            <img className="card-img-top" src={itemToShow.image} alt={itemToShow.name}/>
            <div className="card-body">
                <h5 className="card-title">{itemToShow.name}</h5>
            </div>
            {itemToShow && <p>Cantidad en carrito: {itemToShow.quantity}</p>}
            {itemToShow && <p>precio total: {itemToShow.price}</p>}
            <button className="btn btn-primary" onClick={add()}>+</button>
            <button className="btn btn-danger" onClick={remove()}>-</button>

        </div>
    )
}

export default CartDetail;