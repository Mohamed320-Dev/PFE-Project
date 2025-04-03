import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from "react-router-dom";
import "./Food.css";
import productsData from "./Data.json";
import { FaArrowDown, FaArrowUp } from "react-icons/fa"; // Replacing ion-icon
import HeaderBody from '../HeaderBody/HeaderBody';

export default function Food() {
    const [searchTerm, setSearchTerm] = useState("");

    const allItems = Object.entries(productsData).flatMap(([category, items]) =>
        items.map((item) => ({ ...item, category }))
    );

    const filteredItems =
        searchTerm.trim() !== ""
            ? allItems.filter((item) =>
                item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
            )
            : null;

    return (
        <div>
            <Navbar />
            <HeaderBody />

            <div className="vegitbales-container">
                <input
                    type="text"
                    placeholder="Search food..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                /> <br />

                {searchTerm.trim() !== "" ? (
                    filteredItems.length > 0 ? (
                        <>
                            <h2 className="category-title">Search Results:</h2>
                            <div className="products-container">
                                {filteredItems.map((product) => (
                                    <VegetableCard key={product.id} product={product} />
                                ))}
                            </div>
                        </>
                    ) : (
                        <p className="text-result-yet">No results found</p>
                    )
                ) : (
                    Object.entries(productsData).map(([category, items]) => (
                        <React.Fragment key={category}>
                            <h2 className="category-title">
                                🍽️ {category.charAt(0).toUpperCase() + category.slice(1)}
                            </h2>

                            <div className="products-container">
                                {items.map((product) => (
                                    <VegetableCard key={product.id} product={product} />
                                ))}
                            </div>
                        </React.Fragment>
                    ))
                )}
            </div>
        </div>
    );
}

function VegetableCard({ product }) {
    const caloriesPerGram = !isNaN(Number(product.calories))
        ? Number(product.calories) / 100
        : 0;

    const [weight, setWeight] = useState(100);
    const [show, setShow] = useState(false);

    const calories = parseFloat((weight * caloriesPerGram).toFixed(2));
    const proteinAmount = ((calories * 0.25) / 4).toFixed(2);
    const carbsAmount = ((calories * 0.45) / 4).toFixed(2);
    const fatsAmount = ((calories * 0.3) / 9).toFixed(2);

    return (
        <div className="d-vegitbales">
            <img src={product.image} alt={product.name} className="veg-image" />
            <h3 className="name-product">{product.name}</h3>
            <h4 className="weight-product">{weight} g</h4>
            <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(Math.max(1, Number(e.target.value)))}
                min="1"
                className="input-value"
                placeholder="Enter weight (g)"
            />
            <p className="number-calories">
                <strong>{calories}</strong> calories
            </p>
            <p onClick={() => setShow(!show)} className="d-show-outline">
                {show ? <FaArrowUp /> : <FaArrowDown />}
            </p>
            {show && (
                <div className='d-number-result'>
                    <p><strong>Protein: </strong> {proteinAmount} g</p>
                    <p><strong>Carbs: </strong> {carbsAmount} g</p>
                    <p><strong>Fats: </strong> {fatsAmount} g</p>
                </div>
            )}
        </div>
    );
}
