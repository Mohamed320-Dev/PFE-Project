import React, { useState } from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo1.png"

export default function Navbar() {
    const [activeLink, setActiveLink] = useState(null);

    const handleClick = (link) => {
        setActiveLink(activeLink === link ? null : link);
    };

    return (
        <div>
            <div className="first-div">
                <ul>
                    <li className="link-nav link-0">
                        <div className="icon icon-menu">
                            <i className="fa-solid fa-bars"></i>
                        </div>
                        <div className="text-title"><img src={logo} alt="" /></div>
                    </li>
                    <li className="link-nav link-1">
                        <Link to={"/dashboard"} className="dashboard-link">
                            <div className="icon icon-accueil">
                                <i className="ri-home-line"></i>
                            </div>
                            <div className="text-accueil">Favorite Workouts</div>
                        </Link>
                    </li>

                    <li
                        className="link-nav link-2"
                        onClick={() => handleClick("link-order")}
                    >
                        <div className="icon icon-box">
                            <i className="bi bi-box"></i>
                        </div>
                        <div className="text-order">Favorite Food</div>
                    </li>


                    <li
                        className="link-nav link-3"
                        onClick={() => handleClick("link-product")}
                    >
                        <div className="icon icon-product">
                            <i class="bi bi-cart"></i>
                        </div>
                        <div className="text-product">Carte</div>
                    </li>

                    {/**********************/}
                    <li
                        className="link-nav link-5"
                        onClick={() => handleClick("link-coupon")}
                    >
                        <div className="icon icon-coupon">
                            <i class="bi bi-calculator"></i>
                        </div>
                        <div className="text-coupon">Calorie Calculator</div>
                    </li>

                    {/**********************/}
                    <li
                        className="link-nav link-6"
                        onClick={() => handleClick("link-store")}
                    >
                        <div className="icon icon-store">
                            <i className="bi bi-shop-window"></i>
                        </div>
                        <div className="text-store">Services</div>
                    </li>

                    {/**********************/}
                    <li className="link-nav link-7">
                        <div className="icon icon-insight">
                            <i className="bi bi-graph-up-arrow"></i>
                        </div>
                        <div className="text-insight">Our Programs</div>
                    </li>
                    <li className="link-nav link-8">
                        <div className="icon icon-invoice">
                            <i class="bi bi-person-lines-fill"></i>
                        </div>
                        <div className="text-invoice">Contact</div>
                    </li>

                    <li className="link-nav link-12">
                        <div className="icon icon-seting">
                            <i className="bi bi-gear"></i>
                        </div>
                        <div className="text-seting">Setings</div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
