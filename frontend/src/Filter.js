import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './Filter.css'
import './button.css'
import './form.css'

const Filter = ({ close }) => {
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)
    const [minSize, setMinSize] = useState(0)
    const [maxSize, setMaxSize] = useState(0)
    const [nRooms, setNRooms] = useState(0)
    const handleSubmit = values => {
        console.warn(values)
    }
    return (
        <div className="Filter">
            <div className="Filter__header">
                <h1>Filter</h1>
                <FontAwesomeIcon icon={faTimes} onClick={close} />
            </div>
            <div className="Filter__content">
                <form method="POST" onSubmit={handleSubmit}>
                    <div className="input__group input__group--column">
                        <h1>Price</h1>
                        <div className="input__group input__group--row">
                            <div className="input__group">
                                <label htmlFor="#minPrice">Min: </label>
                                <input
                                    type="number"
                                    id="minPrice"
                                    name="minPrice"
                                    min="0"
                                    max="1000000"
                                    step="50"
                                    onChange={value => setMinPrice(value)}
                                />
                            </div>
                            <div className="input__group">
                                <label htmlFor="#maxPrice">Max: </label>
                                <input
                                    type="number"
                                    id="maxPrice"
                                    name="maxPrice"
                                    min={minPrice}
                                    max="1000000"
                                    step="50"
                                    onChange={value => setMaxPrice(value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="input__group input__group--column">
                        <h1>Size</h1>
                        <div className="input__group input__group--row">
                            <div className="input__group">
                                <label htmlFor="#minSize">Min: </label>
                                <input
                                    type="number"
                                    id="minSize"
                                    name="minSize"
                                    min="0"
                                    max="1000000"
                                    step="10"
                                    onChange={value => setMinSize(value)}
                                />
                            </div>
                            <div className="input__group">
                                <label htmlFor="#maxSize">Max: </label>
                                <input
                                    type="number"
                                    id="maxSize"
                                    name="maxSize"
                                    min={minSize}
                                    max="1000000"
                                    step="10"
                                    onChange={value => setMaxSize(value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="input__group input__group--row">
                        <label htmlFor="#nRooms">Number of Rooms: </label>
                        <input
                            type="number"
                            min="1"
                            max="100"
                            step="1"
                            id="nRooms"
                            name="nRooms"
                            onChange={value => setNRooms(value)}
                        />
                        +
                    </div>
                </form>
            </div>
            <div className="Filter__footer">
                <button className="btn btn--secondary" onClick={close}>
                    Cancel
                </button>
                <button className="btn btn--primary">Send</button>
            </div>
        </div>
    )
}

export default Filter
