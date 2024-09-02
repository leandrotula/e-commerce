import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeItem, setCurrentItem, updateOperationState} from "../../../slices/cartSlice.js";
import {getItemById} from "../../../service/cartItemsService.js";
import {useEffect} from "react";

const CartDetail = () => {

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
        getItemById(id)
            .then((found) => {
                dispatch(setCurrentItem(found));
                const alreadyThere = allItems.find((it) => parseInt(it.id) === parseInt(found.id));
                if (!alreadyThere) {
                    if (found) {
                        dispatch(setCurrentItem(found));
                        dispatch(updateOperationState('ok'));
                    } else {
                        dispatch(updateOperationState('loading'));
                    }
                } else {
                    dispatch(setCurrentItem(alreadyThere));
                    dispatch(updateOperationState('ok'));
                }

            })
            .catch(console.error);
    }, [allItems, dispatch, id]);

    return (
        <div className="col-md-4">
            <img className="card-img-top" src={itemToShow.image} alt={itemToShow.name}/>
            <div className="card-body">
                <h5 className="card-title">{itemToShow.name}</h5>
            </div>
            {loadingState !== "ok" && <p>CARGANDO.......</p>}
            {loadingState === "ok" && itemToShow && <p>Cantidad en carrito: {itemToShow.quantity}</p>}
            {loadingState === "ok" && itemToShow && <p>Precio total: $ {itemToShow.total_price && itemToShow.total_price.toFixed(2)}</p>}
            {loadingState === "ok" && itemToShow && <p>Precio por unidad: $ {itemToShow.price && itemToShow.price.toFixed(2)}</p>}
            <button className="btn btn-primary" disabled={loadingState !== 'ok'} onClick={add()}>+</button>
            <button className="btn btn-danger" disabled={loadingState !== 'ok'} onClick={remove()}>-</button>

        </div>
    )
}

export default CartDetail;