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
    const allItems = useSelector((state) => state.cart.items);
    const loadingState = useSelector((state) => state.cart.operationState);


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
                const alreadyThere = allItems.find((it) => parseInt(it.id) === parseInt(foundItem.id));
                if (!alreadyThere) {
                    if (foundItem) {
                        dispatch(setCurrentItem(foundItem));
                        dispatch(updateOperationState('ok'));
                    } else {
                        dispatch(updateOperationState('loading'));

                        console.log("No se actualiza estado");
                    }
                } else {
                    dispatch(setCurrentItem(alreadyThere));
                    dispatch(updateOperationState('ok'));
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
            {loadingState !== "ok" && <p>CARGANDO.......</p>}
            {loadingState === "ok" && <p>Cantidad en carrito: {itemToShow.quantity}</p>}
            {loadingState === "ok" && <p>Precio total: $ {itemToShow.total_price && itemToShow.total_price.toFixed(2)}</p>}
            {loadingState === "ok" && <p>Precio por unidad: $ {itemToShow.price && itemToShow.price.toFixed(2)}</p>}
            <button className="btn btn-primary" disabled={loadingState !== 'ok'} onClick={add()}>+</button>
            <button className="btn btn-danger" disabled={loadingState !== 'ok'} onClick={remove()}>-</button>

        </div>
    )
}

export default CartDetail;