const PaymentMessage = ({ state }) => {
    return (
        <>
            {state === 'payment_ok' && (
                <div className="alert alert-success mt-3" role="alert">
                    Payment was successful!
                </div>
            )}
            {state === 'new_payment' && (
                <div className="alert alert-danger mt-3" role="alert">
                    Crea una nueva order
                </div>
            )}
        </>
    );
};

export default PaymentMessage;