import React, { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import api from './api'

import './Modal.css'
import './form.css'
import './button.css'
import './Create.css'
import { AppContext } from './App'

const Create = ({ close }) => {
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, watch } = useForm()
    const { setLoad } = useContext(AppContext)

    const onSubmit = values => {
        const data = new FormData()
        const {
            images,
            price,
            sqm,
            number_bathrooms,
            number_bedrooms,
            title,
        } = values

        data.append('title', title)
        data.append('price', price)
        data.append('sqm', sqm)
        data.append('number_bathrooms', number_bathrooms)
        data.append('number_bedrooms', number_bedrooms)

        if (images) {
            for (let i = 0; i < images.length; i++) {
                const image = images[i]
                data.append('image' + i, image)
            }
        }

        const req = api.post('/apartments', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        setLoading(true)
        req.then(_ => {
            setLoading(false)
            setLoad(true)
            close()
        })
    }
    return (
        <form className="Create" onSubmit={handleSubmit(onSubmit)}>
            <div className="Modal__header">
                <h1>Create Apartment</h1>
                <FontAwesomeIcon icon={faTimes} onClick={close} />
            </div>
            <div className="Modal__content">
                <div className="input__group input__group--column">
                    <h1>Images</h1>
                    <div className="input__group input__group--column">
                        <div className="input__group">
                            <input
                                ref={register}
                                type="file"
                                name="images"
                                multiple
                            />
                        </div>
                    </div>
                    <div className="input__group input__group--column">
                        <h1>Information</h1>
                        <div className="input__group">
                            <label htmlFor="title">Title</label>
                            <input
                                ref={register}
                                type="text"
                                name="title"
                                required
                            />
                        </div>
                        <div className="input__group input__group--row">
                            <div className="input__group">
                                <label htmlFor="sqm">Size</label>
                                <input
                                    ref={register}
                                    type="number"
                                    name="sqm"
                                    required
                                />{' '}
                                sqm
                            </div>
                            <div className="input__group">
                                <label htmlFor="price">Price</label>
                                <input
                                    ref={register}
                                    type="number"
                                    name="price"
                                    required
                                />
                            </div>
                        </div>
                        <div className="input__group input__group--row">
                            <div className="input__group">
                                <label htmlFor="number_bathrooms">
                                    Bathrooms
                                </label>
                                <input
                                    ref={register}
                                    type="number"
                                    name="number_bathrooms"
                                    min="0"
                                    max="1000"
                                    step={1}
                                    required
                                />
                            </div>
                            <div className="input__group">
                                <label htmlFor="number_bedrooms">
                                    Bedrooms
                                </label>
                                <input
                                    ref={register}
                                    type="number"
                                    name="number_bedrooms"
                                    min="0"
                                    max="1000"
                                    step={1}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Modal__footer">
                <button
                    className="btn btn--secondary"
                    onClick={e => {
                        e.preventDefault()
                        close()
                    }}
                >
                    Cancel
                </button>
                <button type="submit" className="btn btn--primary">
                    {loading ? 'Loading...' : 'Send'}
                </button>
            </div>
        </form>
    )
}

export default Create
