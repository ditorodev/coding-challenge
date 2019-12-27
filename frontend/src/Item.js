import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBath,
    faBuilding,
    faBed,
    faArrowLeft,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icons'

import './Item.css'

function formatMoney(number) {
    return number.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    })
}

const Item = ({ images, title, sqm, bathrooms, bedrooms, price }) => {
    const [actualImage, setActualImage] = useState(0)
    const next = () => {
        setActualImage(index => (index >= images.length - 1 ? 0 : index + 1))
    }
    const back = () => {
        setActualImage(index => (index <= 0 ? images.length - 1 : index - 1))
    }

    return (
        <motion.div className="Item">
            <div className="Item__image">
                {images.length > 1 && (
                    <div
                        className="Item__arrow Item__arrow--left"
                        onClick={back}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                )}
                <img src={images[actualImage]} alt="" />
                {images.length > 1 && (
                    <div
                        className="Item__arrow Item__arrow--right"
                        onClick={next}
                    >
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                )}
                {images.length > 1 && (
                    <div className="Item__image-index">{actualImage + 1}</div>
                )}
                <div className="Item__price">
                    <h1>{formatMoney(price * 1)}</h1>
                    <h2>{formatMoney((price * 1) / (sqm * 1))}/sqm</h2>
                </div>
            </div>
            <div className="Item__properties">
                <div className="Item__property">
                    <FontAwesomeIcon icon={faBuilding} />
                    {sqm}sqm
                </div>
                <div className="Item__property">
                    <FontAwesomeIcon icon={faBed} />
                    {bedrooms} beds
                </div>
                <div className="Item__property">
                    <FontAwesomeIcon icon={faBath} />
                    {bathrooms} baths
                </div>
            </div>
            <div className="Item__title">{title}</div>
        </motion.div>
    )
}

export default Item
