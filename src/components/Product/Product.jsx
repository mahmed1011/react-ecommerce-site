import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const Product = () => {
    const [data, setData] = useState([]); // State to store the products
    const [loading, setLoading] = useState(false); // Loading state for the loader
    const [page, setPage] = useState(1); // Page number for pagination
    const [hasMore, setHasMore] = useState(true); // State to check if there are more products to fetch

    // Fetch products based on the page
    const fetchProducts = async () => {
        setLoading(true); // Show loader while fetching data
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`);
            const result = await response.json();
            setData((prevData) => [...prevData, ...result.products]); // Append new products to the existing ones
            setHasMore(result.products.length > 0); // Check if more products are available
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false); // Hide loader after fetching data
        }
    };

    // Load products when the page loads and when the page number changes
    useEffect(() => {
        fetchProducts();
    }, [page]);

    // Handle scroll event to detect when the user reaches the bottom
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100 && !loading && hasMore) {
                setPage((prevPage) => prevPage + 1); // Increase page number when reaching the bottom
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Clean up the event listener
    }, [loading, hasMore]);

    const formatTitle = (title) => title.toLowerCase().replace(/\s+/g, '-'); // Function to format title for URL

    return (
        <div className="container mx-auto py-8">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 place-items-center gap-8'>
                {/* Loop through the data */}
                {data.map((product) => (
                    <div
                        data-aos="fade-up"
                        data-aos-delay={100} // Adjust delay if needed
                        key={product.id}
                        className="space-y-3">
                        <Link to={`/product/${formatTitle(product.title)}`}>
                            {/* Use the product image from the API */}
                            <img
                                src={product.thumbnail} // Use the thumbnail from API or change to product.images[0] if you prefer
                                alt={product.title}
                                className="h-[200px] w-[150px] object-cover rounded-md"
                            />
                            <div>
                                {/* Product Title */}
                                <h3 className="font-semibold">{product.title}</h3>
                                {/* Rating */}
                                <div className="flex items-center gap-1">
                                    <FaStar className="text-yellow-500" />
                                    <span>{product.rating}</span>
                                </div>
                                {/* Product Price */}
                                <p className="text-primary font-semibold">${product.price}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Loader */}
            {loading && (
                <div className="flex justify-center items-center py-8">
                    <div className="loader"></div> {/* You can customize the loader */}
                    <p>Loading more products...</p>
                </div>
            )}

            {/* No more products message */}
            {!hasMore && (
                <div className="flex justify-center items-center py-8">
                    <p>No more products to load.</p>
                </div>
            )}
        </div>
    );
};

export default Product;
