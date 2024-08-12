import {ItemContext} from "../../context/ItemContext";
import {useContext} from "react";

const PurchaseDetail = () => {

    const { item } = useContext(ItemContext);

    console.log('PurchaseDetail', item);
    return (
        <pre>
            {JSON.stringify(item, null, 3)}
          </pre>

    )
}

export default PurchaseDetail;