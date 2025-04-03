import React, { useState } from 'react'
import "./HeaderBody.css"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function HeaderBody() {
    const [show, setShow] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show)
    }
    return (
        <>
            <div className='header-body'>
                <ul>
                    <li><Link to="/client-exercises">Exercices</Link></li>
                    <li><Link to="/client-food">Food</Link></li>
                    <li><Link to="/store-products">Store</Link></li>
                </ul>
                <div className="icon-profile">
                    <a href="#"><i class="bi bi-person" onClick={handleClick}></i></a>
                    {/* <button className="logout-button-body">Logout</button> */}
                </div>
            </div>

            {
                show && (
                    <>
                        {/* <div className='add-d'>hello</div> */}
                        <div className='result-profile'>
                            <div>Hello   ....</div>

                            <motion.div
                                className='d-logout'
                                whileHover={{ x: -10, scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 150 }}
                            >
                                <i className="bi bi-box-arrow-right"></i>
                                <p>Logout</p>
                            </motion.div>

                        </div>
                    </>
                )
            }
        </>
    )
}
