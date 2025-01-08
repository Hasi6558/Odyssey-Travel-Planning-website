import React from 'react'

const PayHerePayment = () => {
    const handlePayment = () => {

        payhere.onCompleted = function (orderId) {
            console.log("Payment completed. Order ID:", orderId);
        };

        payhere.onDismissed = function () {
            console.log("Payment dismissed");
        };

        payhere.onError = function (error) {
            console.log("Error:", error);
        };
        // Payment details
        const payment = {
            sandbox: true, // Change to false for live payments
            merchant_id: "1229271", // Replace with your Merchant ID
            return_url: "http://localhost:5173/",
            cancel_url: "http://localhost:5173/",
            notify_url: "",
            order_id: "order123",
            items: "Sample Product",
            amount: 1000.00, // Amount in LKR
            currency: "LKR",
            first_name: "John",
            last_name: "Doe",
            email: "john.doe@example.com",
            phone: "0712345678",
            address: "No. 1, Sample Street",
            city: "Colombo",
            country: "Sri Lanka",
        };

        // Initialize and start the payment
        window.payhere.startPayment(payment);
    };

    return (
        <div>
            <button onClick={handlePayment}>Pay with PayHere</button>
        </div>
    );
};

export default PayHerePayment