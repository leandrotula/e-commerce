import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useState} from "react";
import FormPaymentClient from "../formPayment/FormPaymentClient.jsx";

const PurchaseDetail = () => {
    const itemsCart = useSelector((state) => state.cart.items)
    const totalFinal = itemsCart.reduce((acc, product) => acc + (product.total_price ? product.total_price : 0), 0).toFixed(2);
    const [showPaymentForm, setShowPaymentForm] = useState(false)


    const handleForm = () => {
        setShowPaymentForm(true);
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Carrito de compra</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Imagen</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio Unitario</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Total</th>
                </tr>
                </thead>
                <tbody>
                {itemsCart.filter(product => product.quantity > 0).map(product => (
                    <tr key={product.id}>
                        <Link to={`/autos/${product.id}`}>
                            <td>
                                <img src={product.image} alt={product.name} width="100"/>
                            </td>
                        </Link>
                        <td>{product.name}</td>
                        <td>${product.price.toFixed(2)}</td>
                        <td>{product.quantity}</td>
                        <td>${product.total_price.toFixed(2)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="text-right mt-4">
                <h4>Total a pagar: ${totalFinal}</h4>
            </div>
            <div className="text-right mt-4">
                <button className="btn btn-outline-primary" onClick={handleForm}>COMPRAR</button>
                {itemsCart.length > 0 && showPaymentForm && <FormPaymentClient/>}
            </div>
        </div>
    );
};

export default PurchaseDetail;
