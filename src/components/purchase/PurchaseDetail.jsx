import {useSelector} from "react-redux";

const PurchaseDetail = () => {

    const itemsCart = useSelector((state) => state.cart.items)
    let allItems = new Set(itemsCart)

    return (
        <pre>
            {JSON.stringify([...allItems], null, 3)}
          </pre>

    )
}

export default PurchaseDetail;