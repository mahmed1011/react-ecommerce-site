import React, { useContext, useState } from 'react';
import { CartContext } from '../../contextApi/CartContext';

const CheckoutPage = () => {
    const { cartItems } = useContext(CartContext);
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        paymentMethod: 'card',
        cardNumber: '',
        cardExpiry: '',
        cardCVV: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        });

        // Reset errors for the current field
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    const validate = () => {
        let newErrors = {};

        // Basic validation for required fields
        if (!userInfo.name) newErrors.name = 'Name is required';
        if (!userInfo.email) newErrors.email = 'Email is required';
        if (!userInfo.address) newErrors.address = 'Address is required';
        if (!userInfo.city) newErrors.city = 'City is required';
        if (!userInfo.state) newErrors.state = 'State is required';
        if (!userInfo.zip) newErrors.zip = 'ZIP Code is required';

        // Email format validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (userInfo.email && !emailPattern.test(userInfo.email)) {
            newErrors.email = 'Invalid email format';
        }

        // Card details validation
        if (userInfo.paymentMethod === 'card') {
            if (!userInfo.cardNumber) newErrors.cardNumber = 'Card number is required';
            if (!userInfo.cardExpiry) newErrors.cardExpiry = 'Expiry date is required';
            if (!userInfo.cardCVV) newErrors.cardCVV = 'CVV is required';

            // Card number format validation (basic, assuming 16 digits)
            if (userInfo.cardNumber && !/^\d{16}$/.test(userInfo.cardNumber)) {
                newErrors.cardNumber = 'Card number must be 16 digits';
            }

            // Expiry date format validation (MM/YY)
            if (userInfo.cardExpiry && !/^(0[1-9]|1[0-2])\/\d{2}$/.test(userInfo.cardExpiry)) {
                newErrors.cardExpiry = 'Expiry date must be in MM/YY format';
            }

            // CVV format validation (3 or 4 digits)
            if (userInfo.cardCVV && !/^\d{3,4}$/.test(userInfo.cardCVV)) {
                newErrors.cardCVV = 'CVV must be 3 or 4 digits';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('User Info:', userInfo);
            // Proceed with form submission (e.g., API call)
        }
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto py-8 flex flex-col md:flex-row">
            {/* Left Side: User Info Form */}
            <div className="md:w-2/3 p-4 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-4">Checkout</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-lg font-medium mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={userInfo.name}
                                onChange={handleChange}
                                required
                                className={`border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2 w-full focus:ring focus:ring-primary`}
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>
                        <div>
                            <label className="block text-lg font-medium mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={userInfo.email}
                                onChange={handleChange}
                                required
                                className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2 w-full focus:ring focus:ring-primary`}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                    </div>

                    <div>
                        <label className="block text-lg font-medium mb-1">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={userInfo.address}
                            onChange={handleChange}
                            required
                            className={`border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2 w-full focus:ring focus:ring-primary`}
                        />
                        {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-lg font-medium mb-1">City</label>
                            <input
                                type="text"
                                name="city"
                                value={userInfo.city}
                                onChange={handleChange}
                                required
                                className={`border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2 w-full focus:ring focus:ring-primary`}
                            />
                            {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                        </div>
                        <div>
                            <label className="block text-lg font-medium mb-1">State</label>
                            <input
                                type="text"
                                name="state"
                                value={userInfo.state}
                                onChange={handleChange}
                                required
                                className={`border ${errors.state ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2 w-full focus:ring focus:ring-primary`}
                            />
                            {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
                        </div>
                        <div>
                            <label className="block text-lg font-medium mb-1">ZIP Code</label>
                            <input
                                type="text"
                                name="zip"
                                value={userInfo.zip}
                                onChange={handleChange}
                                required
                                className={`border ${errors.zip ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2 w-full focus:ring focus:ring-primary`}
                            />
                            {errors.zip && <p className="text-red-500 text-sm">{errors.zip}</p>}
                        </div>
                    </div>

                    {/* Payment Method Selection */}
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold">Payment Options</h3>
                        <div>
                            <label className="flex items-center mb-2">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="card"
                                    checked={userInfo.paymentMethod === 'card'}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Credit/Debit Card
                            </label>
                            <label className="flex items-center mb-2">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="cod"
                                    checked={userInfo.paymentMethod === 'cod'}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Cash on Delivery
                            </label>
                        </div>
                    </div>

                    {/* Card Details Section */}
                    {userInfo.paymentMethod === 'card' && (
                        <div className="mt-4 border p-4 rounded-md bg-gray-50">
                            <h3 className="text-lg font-semibold">Card Details</h3>
                            <div>
                                <label className="block text-lg font-medium mb-1">Card Number</label>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    value={userInfo.cardNumber}
                                    onChange={handleChange}
                                    required
                                    className={`border ${errors.cardNumber ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2 w-full focus:ring focus:ring-primary`}
                                />
                                {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
                            </div>
                            <div className="flex space-x-4">
                                <div className="flex-1">
                                    <label className="block text-lg font-medium mb-1">Expiry (MM/YY)</label>
                                    <input
                                        type="text"
                                        name="cardExpiry"
                                        value={userInfo.cardExpiry}
                                        onChange={handleChange}
                                        required
                                        className={`border ${errors.cardExpiry ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2 w-full focus:ring focus:ring-primary`}
                                    />
                                    {errors.cardExpiry && <p className="text-red-500 text-sm">{errors.cardExpiry}</p>}
                                </div>
                                <div className="flex-1">
                                    <label className="block text-lg font-medium mb-1">CVV</label>
                                    <input
                                        type="text"
                                        name="cardCVV"
                                        value={userInfo.cardCVV}
                                        onChange={handleChange}
                                        required
                                        className={`border ${errors.cardCVV ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2 w-full focus:ring focus:ring-primary`}
                                    />
                                    {errors.cardCVV && <p className="text-red-500 text-sm">{errors.cardCVV}</p>}
                                </div>
                            </div>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                    >
                        Confirm Order
                    </button>
                </form>
            </div>

            {/* Right Side: Product Info */}
            <div className="md:w-1/3 p-4 bg-white rounded-lg shadow-md ml-0 md:ml-4">
                <h1 className="text-3xl font-bold mb-4">Your Order</h1>
                <div>
                    {cartItems.map(item => (
                        <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-300">
                            <div className="flex items-center">
                                <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover mr-4 rounded-md" />
                                <div>
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-sm">Quantity: {item.quantity}</p>
                                </div>
                            </div>
                            <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex justify-between items-center">
                    <h3 className="text-xl font-bold">Subtotal:</h3>
                    <p className="text-xl font-semibold">${totalPrice.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
