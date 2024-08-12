//import {ItemContext} from "../../context/ItemContext";
//import {useContext} from "react";
import {useSelector} from "react-redux";

const PurchaseDetail = () => {

    //const { item } = useContext(ItemContext);
    const itemsCart = useSelector((state) => state.cart.items)

    console.log(itemsCart)
    return (
        <pre>
            {JSON.stringify(itemsCart, null, 3)}
          </pre>

    )
}

export default PurchaseDetail;