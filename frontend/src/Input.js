import React from 'react'

const Input = ({ label, type, placeholder, model }) => {
    return (
        <div className="Input">
            <label htmlFor={`${label}`}> {label} </label>
            <input type={type} />
        </div>
    )
}

export default Input
