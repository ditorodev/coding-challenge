import express from 'express'
import Apartment from '../models/apartment'
import { responseFactory } from '../utils'

const router = express.Router()

router.post('/', async (req, res) => {
    const {
        title,
        sqm,
        number_bathrooms,
        number_bedrooms,
        coords,
        price,
    } = req.body

    const apartment = new Apartment({
        title,
        sqm,
        price,
        number_bathrooms,
        number_bedrooms,
        coords,
        created_at: Date.now(),
        updated_at: Date.now(),
    })

    const response = await apartment
        .save()
        .then(() => {
            return responseFactory(201, {
                message: 'Apartment created successfully',
            })
        })
        .catch(err => {
            console.error('[Apartments] ', err)
            return responseFactory(400, { message: 'Missing argument ', err })
        })

    return res.json(response)
})
/*
 * Get all apartments
 * */
router.get('/', async (req, res) => {
    Apartment.find({}, (error, apartments) => {
        if (apartments && apartments.length > 0) {
            const response = responseFactory(200, { apartments })
            return res.json(response)
        } else {
            const response = responseFactory(404, { message: error })
            return res.json(response)
        }
    })
})

export default router
