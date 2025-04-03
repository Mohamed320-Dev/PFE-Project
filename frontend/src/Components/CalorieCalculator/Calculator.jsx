import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import HeaderBody from "../HeaderBody/HeaderBody";
import "./Calculator.css";

export default function Calculator() {
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [activityLevel, setActivityLevel] = useState("");
    const [calories, setCalories] = useState(null);
    const [protein, setProtein] = useState(null);
    const [carbs, setCarbs] = useState(null);
    const [fats, setFats] = useState(null);
    const [showResults, setShowResults] = useState(false);

    // State to store previous results
    const [savedResults, setSavedResults] = useState(
        JSON.parse(localStorage.getItem("savedResults")) || []
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!age || !weight || !height || !activityLevel) {
            alert("Please fill in all fields.");
            return;
        }

        const weightNumber = parseFloat(weight);
        const heightNumber = parseFloat(height);
        const ageNumber = parseInt(age);

        let bmr = 88.362 + 13.397 * weightNumber + 4.799 * heightNumber - 5.677 * ageNumber;
        let activityFactor = {
            "no-exercise": 1.2,
            "1-3-times": 1.375,
            "3-5-times": 1.55,
            "6-7-times": 1.725,
            "hard-exercises": 1.9,
        }[activityLevel] || 1.2;

        const tdee = bmr * activityFactor;
        setCalories(tdee.toFixed(2));
        setProtein(((tdee * 0.25) / 4).toFixed(2));
        setCarbs(((tdee * 0.45) / 4).toFixed(2));
        setFats(((tdee * 0.3) / 9).toFixed(2));

        setShowResults(true);
    };

    const handleRecalculate = () => {
        setShowResults(false);
    };

    const handleSave = () => {
        const timestamp = new Date().toLocaleString();

        const newSavedResult = {
            age,
            weight,
            height,
            activityLevel,
            calories,
            protein,
            carbs,
            fats,
            timestamp,
        };

        const updatedResults = [...savedResults, newSavedResult];
        setSavedResults(updatedResults);
        localStorage.setItem("savedResults", JSON.stringify(updatedResults));

        // Clear form after saving
        setAge("");
        setWeight("");
        setHeight("");
        setActivityLevel("");
        setCalories(null);
        setProtein(null);
        setCarbs(null);
        setFats(null);
        setShowResults(false);
    };

    const handleDelete = (index) => {
        const updatedResults = savedResults.filter((_, i) => i !== index);
        setSavedResults(updatedResults);
        localStorage.setItem("savedResults", JSON.stringify(updatedResults));

    };

    return (
        <>
            <HeaderBody />
            <Navbar />
            <div className="absolute h-auto flex flex-col items-center bg-white p-6 ml-[240px] w-[1111px] mt-[72px]">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Calorie Calculator</h2>
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                    {!showResults ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="number"
                                placeholder="Age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                className="w-full p-3 border rounded-lg"
                            />
                            <input
                                type="number"
                                placeholder="Weight (kg)"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                className="w-full p-3 border rounded-lg"
                            />
                            <input
                                type="number"
                                placeholder="Height (cm)"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                className="w-full p-3 border rounded-lg"
                            />
                            <select
                                value={activityLevel}
                                onChange={(e) => setActivityLevel(e.target.value)}
                                className="w-full p-3 border rounded-lg"
                            >
                                <option value="">Select Activity Level</option>
                                <option value="no-exercise">No Exercise</option>
                                <option value="1-3-times">1-3 Times a Week</option>
                                <option value="3-5-times">3-5 Times a Week</option>
                                <option value="6-7-times">6-7 Times a Week</option>
                                <option value="hard-exercises">Hard Exercises</option>
                            </select>
                            <button
                                type="submit"
                                className="w-full bg-[#3A6D8C] text-white p-3 rounded-lg hover:bg-[#6A9AB0] transition"
                            >
                                Calculate
                            </button>
                        </form>
                    ) : (
                        <div className="text-center space-y-4">
                            <h3 className="text-xl font-semibold">Daily Caloric Needs: {calories} kcal</h3>
                            <p>Protein: {protein}g</p>
                            <p>Carbohydrates: {carbs}g</p>
                            <p>Fats: {fats}g</p>
                            <div className="flex justify-center gap-4">
                                <button
                                    onClick={handleRecalculate}
                                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                                >
                                    Recalculate
                                </button>
                                <button
                                    onClick={handleSave}
                                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-8 w-full">
                    <h3 className="text-2xl font-semibold mb-4">Saved Results</h3>
                    <table className="w-full text-left table-auto border-collapse">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border">Age</th>
                                <th className="px-4 py-2 border">Weight</th>
                                <th className="px-4 py-2 border">Height</th>
                                <th className="px-4 py-2 border">Activity Level</th>
                                <th className="px-4 py-2 border">Calories</th>
                                <th className="px-4 py-2 border">Timestamp</th>
                                <th className="px-4 py-2 border">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {savedResults.map((result, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-2 border">{result.age}</td>
                                    <td className="px-4 py-2 border">{result.weight}</td>
                                    <td className="px-4 py-2 border">{result.height}</td>
                                    <td className="px-4 py-2 border">{result.activityLevel}</td>
                                    <td className="px-4 py-2 border">{result.calories} kcal</td>
                                    <td className="px-4 py-2 border">{result.timestamp}</td>
                                    <td className="px-4 py-2 border">
                                        <button
                                            onClick={() => handleDelete(index)}
                                            className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
