import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faBuilding, faBed } from '@fortawesome/free-solid-svg-icons'

import './item.css'

const Item = ({ image }) => {
    return (
        <motion.div className="Item" whileTap={{ scale: 0.9 }}>
            <div className="Item__image">
                <img
                    src={
                        image ||
                        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    }
                    alt=""
                />
                <div className="Item__price">
                    <h1>123.456$</h1>
                    <h2>12.3$/m</h2>
                </div>
            </div>
            <div className="Item__properties">
                <div className="Item__property">
                    <FontAwesomeIcon icon={faBuilding} />
                    100sqm
                </div>
                <div className="Item__property">
                    <FontAwesomeIcon icon={faBed} />2 habs
                </div>
                <div className="Item__property">
                    <FontAwesomeIcon icon={faBath} />2 baths
                </div>
            </div>
            <div className="Item__title">
                Test Apartment with elevator in Sant Martí
            </div>
        </motion.div>
    )
}

export default Item
