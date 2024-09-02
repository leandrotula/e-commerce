import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateById } from "../../service/cartItemsService.js";
import { setErrorState, updatePaymentState } from "../../slices/paymentSlice.js";
import PaymentMessage from "../alert/AlertMessage.jsx";

const FormPayment = () => {
    const [errors, setErrors] = useState({ dueDate: '' });
    const [formValues, setFormValues] = useState({
        creditCardNumber: '',
        cardCode: '',
        dueDate: '',
    });
    const [isFormValid, setIsFormValid] = useState(false);
    const itemsCart = useSelector((state) => state.cart.items)
    const dispatch = useDispatch()
    const state = useSelector((state) => state.payment.paymentState);

    useEffect(() => {
        const { creditCardNumber, cardCode, dueDate } = formValues;
        setIsFormValid(creditCardNumber && cardCode && dueDate && !errors.dueDate);
    }, [formValues, errors]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value
        });

        if (name === 'dueDate') {
            const validationError = validateDueDate(value);
            setErrors({ dueDate: validationError });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (state === 'payment_ok') {
            return
        }
        const { creditCardNumber, cardCode, dueDate } = formValues;
        const validationError = validateDueDate(dueDate);
        if (validationError) {
            setErrors({ dueDate: validationError });
        } else {
            setErrors({ dueDate: '' });
            if (itemsCart.length > 0) {
                itemsCart.forEach(item => {
                    updateById(item.id, {
                        itemId: item.id,
                        creditCardNumber: creditCardNumber,
                        cardCode: cardCode,
                        creditCardDueDate: dueDate,
                        totalPrice: item.total_price,
                    }).then(() => {
                        dispatch(updatePaymentState("payment_ok"))
                    })
                        .catch(() => {
                            dispatch(setErrorState("payment_error"));
                            dispatch(updatePaymentState("payment_error"));
                        });
                });
            }
        }
    };

    const validateDueDate = (dueDate) => {
        const currentDate = new Date();
        const inputDate = new Date(dueDate);
        if (inputDate < currentDate) {
            return 'La fecha de vencimiento no puede ser del pasado.';
        }
        return '';
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-5">
            <div className="mb-3">
                <label htmlFor="credit_card_number" className="form-label">Número Tarjeta de Crédito:</label>
                <input type="number" className="form-control" pattern="\d{16}" id="credit_card_number" maxLength={16} name="creditCardNumber" placeholder="Ingresa solo números" value={formValues.creditCardNumber} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="credit_card_code" className="form-label">Codigo de seguridad:</label>
                <input type="number" className="form-control" id="credit_card_code" name="cardCode" value={formValues.cardCode} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="due_date_card_code" className="form-label">Fecha de vencimiento:</label>
                <input type="date" className="form-control" id="due_date_card_code" name="dueDate" value={formValues.dueDate} onChange={handleChange} />
                {errors.dueDate && <div className="text-danger mt-2">{errors.dueDate}</div>}
            </div>
            <button type="submit" className="btn btn-primary" disabled={!isFormValid}>PAGAR</button>
            {state === 'payment_ok' && <div>
                <PaymentMessage state={state}/>
            </div>
            }
            {state === 'new_payment' && <div>
                <PaymentMessage state={state}/>
            </div>
            }
        </form>
    );
};

export default FormPayment;