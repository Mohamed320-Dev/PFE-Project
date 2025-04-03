import React, { useState } from 'react';
import { products } from './products';
import './Store.css';
import iconCart from "../../Assets/iconCart.png";
import { Link } from 'react-router-dom';
import { useCart } from '../Carte/CartContext';

function Store() {
    const addToCart = useCart();
    const [quantities, setQuantities] = useState(
        products.reduce((acc, product) => {
            acc[product.id] = 1;
            return acc;
        }, {})
    );

    const incrementQuantity = (productId) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: (prevQuantities[productId] || 0) + 1
        }));
    };

    const decrementQuantity = (productId) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: Math.max(1, (prevQuantities[productId] || 1) - 1)
        }));
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span key={i} className={i < rating ? 'star filled' : 'star'} style={{ fontSize: "23px" }}>★</span>
            );
        }
        return stars;
    };

    return (
        <div className="app">
            <h2 className='title-product'>Featured Products</h2>
            <button className='back-button' onClick={() => window.history.back()}>Back</button>

            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <div className="image-wrapper">
                            <Link to={product.slug}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                                    }}
                                />
                            </Link>
                        </div>
                        <div className="product-info">
                            <h3 className='text-center'>{product.name}</h3>

                            <div className="stars">
                                {renderStars(product.rating)}
                                <p className='number-review'>(2)</p>
                            </div>

                            <div className="price">
                                ${product.price}
                            </div>

                            <div className="absolute discount text-[#999696] text-sm line-through mt-[28px]">
                                ${(product.price * 0.9).toFixed(2)}
                            </div>

                            <div className="quantity-selector justify-center mt-[70px]">
                                <button
                                    className="quantity-btn px-2 py-1 bg-gray-200 rounded-[50px] text-[11px]"
                                    onClick={() => decrementQuantity(product.id)}
                                >
                                    -
                                </button>
                                <span className="quantity-value px-3 py-1 text-[14px]">
                                    {quantities[product.id]}
                                </span>
                                <button
                                    className="quantity-btn px-2 py-1 bg-gray-200 rounded-[50px] text-[11px]"
                                    onClick={() => incrementQuantity(product.id)}
                                >
                                    +
                                </button>
                            </div>

                            <button
                                className='bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2 mx-auto mt-[-30px] ml-[103px]'
                                onClick={() => addToCart({ ...product, quantity: quantities[product.id] })}
                            >
                                <img src={iconCart} alt="" className='w-5' />
                                Add To Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Store;