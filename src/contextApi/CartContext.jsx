// contextApi/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Function to update item quantity
    const updateQuantity = (id, quantity) => {
        setCartItems((prevItems) => {
            return prevItems.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item // Prevent quantity from going below 1
            );
        });
    };

    // Function to add item to the cart
    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((prevItem) => prevItem.id === item.id);
            if (existingItem) {
                return prevItems.map((prevItem) =>
                    prevItem.id === item.id ? { ...prevItem, quantity: prevItem.quantity + item.quantity } : prevItem
                );
            } else {
                return [...prevItems, item];
            }
        });
    };

    // Function to remove item from the cart
    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    // Function to clear the cart
    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, updateQuantity, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
