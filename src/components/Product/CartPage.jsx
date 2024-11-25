// src/components/CartPage.js
import React, { useContext } from 'react';
import { CartContext } from '../../contextApi/CartContext';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const CartPage = () => {
    const { cartItems, removeFromCart, clearCart, updateQuantity } = useContext(CartContext);

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h1>

            {cartItems.length === 0 ? (
                <p className="text-center text-lg">Your cart is empty!</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <div key={item.id} className="flex items-center justify-between py-4 border-b border-gray-300">
                            <div className="flex items-center">
                                <img src={item.thumbnail} alt={item.title} className="w-24 h-24 object-cover mr-4 rounded-md shadow-md" />
                                <div>
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <div className="flex items-center mt-2">
                                        <button
                                            className="bg-gray-300 text-black py-1 px-3 rounded-md transition duration-200 hover:bg-gray-400"
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            disabled={item.quantity === 1}
                                        >
                                            -
                                        </button>
                                        <p className="mx-2 text-lg font-medium">{item.quantity}</p>
                                        <button
                                            className="bg-gray-300 text-black py-1 px-3 rounded-md transition duration-200 hover:bg-gray-400"
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <p className="text-lg font-semibold mt-2">${item.price.toFixed(2)}</p>
                                </div>
                            </div>
                            <button
                                className="bg-red-500 text-white py-2 px-4 rounded-md transition duration-200 hover:bg-red-700"
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                    <div className="mt-6 flex justify-between items-center">
                        <h3 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h3>
                        <button
                            className="bg-red-500 text-white py-2 px-6 rounded-md transition duration-200 hover:bg-red-700"
                            onClick={clearCart}
                        >
                            Clear Cart
                        </button>
                    </div>

                    {/* Add Checkout Button */}
                    <div className="mt-6">
                        <Link to="/checkout">
                            <button className="bg-primary text-white py-2 px-6 rounded-md hover:bg-secondary transition duration-200">
                                Proceed to Checkout
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
