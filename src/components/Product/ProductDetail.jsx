import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { CartContext } from '../../contextApi/CartContext'; // Import CartContext

const ProductDetail = () => {
    const { title } = useParams(); // Get the product title from the URL
    const { addToCart } = useContext(CartContext); // Access addToCart from CartContext
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [quantity, setQuantity] = useState(1); // State to manage quantity

    useEffect(() => {
        // Fetch products from the API
        fetch('https://dummyjson.com/products')
            .then((result) => result.json())
            .then((resp) => {
                const products = resp.products;
                const formattedTitle = title.replace(/-/g, ' '); // Format title from URL
                const foundProduct = products.find((p) => p.title.toLowerCase() === formattedTitle.toLowerCase());

                if (foundProduct) {
                    setProduct(foundProduct);
                    // Set related products based on category
                    const related = products.filter((p) => p.category === foundProduct.category && p.id !== foundProduct.id);
                    setRelatedProducts(related);
                } else {
                    setProduct(null); // Set product to null if not found
                }
            });
    }, [title]);

    const handleAddToCart = () => {
        addToCart({ ...product, quantity }); // Add product with selected quantity to cart
        setQuantity(1); // Reset quantity to 1 after adding to cart
    };

    if (!product) {
        return <h1>Product not found!</h1>; // If no product found, display a message
    }

    return (
        <div className="container mx-auto py-8">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Product Image */}
                <div className="md:w-1/2">
                    <img src={product.thumbnail} alt={product.title} className="w-full h-auto rounded-md object-cover" />
                </div>

                {/* Product Details */}
                <div className="md:w-1/2">
                    <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
                    <div className="flex items-center gap-1 mb-4">
                        <FaStar className="text-yellow-500" />
                        <span>{product.rating}</span>
                    </div>
                    <p className="text-xl font-semibold text-primary mb-4">${product.price}</p>
                    <p className="mb-6">{product.description}</p>

                    {/* Quantity Counter */}
                    <div className="flex items-center mb-4">
                        <button
                            className="bg-gray-300 text-black py-1 px-3 rounded-md transition duration-200 hover:bg-gray-400"
                            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} // Decrease quantity
                        >
                            -
                        </button>
                        <p className="mx-2">{quantity}</p>
                        <button
                            className="bg-gray-300 text-black py-1 px-3 rounded-md transition duration-200 hover:bg-gray-400"
                            onClick={() => setQuantity(quantity + 1)} // Increase quantity
                        >
                            +
                        </button>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        className="bg-primary text-white py-2 px-6 rounded-md hover:bg-secondary transition duration-200"
                        onClick={handleAddToCart} // Add product with quantity to cart
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Related Products */}
            <div className="mt-12">
                <h2 className="text-xl font-bold mb-6">Related Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {relatedProducts.map((relatedProduct) => (
                        <Link
                            key={relatedProduct.id}
                            to={`/product/${relatedProduct.title.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                            <div className="related-product-card">
                                <img
                                    src={relatedProduct.thumbnail}
                                    alt={relatedProduct.title}
                                    className="h-[200px] w-[150px] object-cover rounded-md"
                                />
                                <div>
                                    <h3 className="font-semibold">{relatedProduct.title}</h3>
                                    <div className="flex items-center gap-1">
                                        <FaStar className="text-yellow-500" />
                                        <span>{relatedProduct.rating}</span>
                                    </div>
                                    <p className="text-primary font-semibold">${relatedProduct.price}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
