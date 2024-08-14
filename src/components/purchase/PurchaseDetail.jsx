import {useSelector} from "react-redux";

const PurchaseDetail = () => {

    const itemsCart = useSelector((state) => state.cart.items)

    return (
        <pre>
            {JSON.stringify(itemsCart, null, 3)}
          </pre>

    )
}

export default PurchaseDetail;