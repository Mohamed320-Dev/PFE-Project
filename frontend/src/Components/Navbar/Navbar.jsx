import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../Assets/logo1.png";

export default function Navbar() {
    const location = useLocation(); // This will give the current route
    const [active, setActive] = useState(location.pathname); // Set the active link to current path

    useEffect(() => {
        setActive(location.pathname); // Update active link when route changes
    }, [location]);

    return (
        <div className="navbar-div">
            <div className="first-div">
                <ul>
                    <li className="link-nav link-0">
                        <div className="icon icon-menu">
                            <i className="fa-solid fa-bars"></i>
                        </div>
                        <div className="text-title">
                            <Link to={"/client-dashboard"}>
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                    </li>
                    <li
                        className={`link-nav link-1 ${active === "/client-dashboard" ? "active" : ""}`}
                    >
                        <Link to="/client-dashboard" className="dashboard-link">
                            <div className="icon icon-accueil">
                                <i className="ri-home-line"></i>
                            </div>
                            <div className="text-accueil">Dashboard</div>
                        </Link>
                    </li>

                    <li
                        className={`link-nav link-2 ${active === "/client-dashboard/favorite-food" ? "active" : ""}`}
                    >
                        <div className="icon icon-box">
                            <i className="bi bi-box"></i>
                        </div>
                        <div className="text-order">Favorite Food</div>
                    </li>

                    <li
                        className={`link-nav link-3 ${active === "/client-dashboard/carte" ? "active" : ""}`}
                    >
                        <div className="icon icon-product">
                            <i className="bi bi-cart"></i>
                        </div>
                        <div className="text-product">Carte</div>
                    </li>

                    <li
                        className={`link-nav link-5 ${active === "/client-calculate" ? "active" : ""}`}
                    >
                        <Link to="/client-calculate">
                            <div className="icon icon-coupon">
                                <i className="bi bi-calculator"></i>
                            </div>
                            <div className="text-coupon">Calorie Calculator</div>
                        </Link>
                    </li>

                    <li
                        className={`link-nav link-6 ${active === "/client-services" ? "active" : ""}`}
                    >
                        <div className="icon icon-store">
                            <i className="bi bi-shop-window"></i>
                        </div>
                        <div className="text-store">Services</div>
                    </li>

                    <li
                        className={`link-nav link-7 ${active === "/client-programs" ? "active" : ""}`}
                    >
                        <div className="icon icon-insight">
                            <i className="bi bi-graph-up-arrow"></i>
                        </div>
                        <div className="text-insight">Our Programs</div>
                    </li>

                    <li
                        className={`link-nav link-8 ${active === "/client-contact" ? "active" : ""}`}
                    >
                        <div className="icon icon-invoice">
                            <i className="bi bi-person-lines-fill"></i>
                        </div>
                        <div className="text-invoice">Contact</div>
                    </li>

                    <li
                        className={`link-nav link-12 ${active === "/client-settings" ? "active" : ""}`}
                    >
                        <div className="icon icon-seting">
                            <i className="bi bi-gear"></i>
                        </div>
                        <div className="text-seting">Settings</div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
