import express from 'express'
import Apartment from '../models/apartment'
import fileUpload from 'express-fileupload'

import { responseFactory, resolveOperator } from '../utils'

const router = express.Router()

router.use(
    fileUpload({
        createParentPath: true,
    })
)

/*
 * Create an apartment
 * */
router.post('/', async (req, res) => {
    const { files, body } = req
    const {
        title,
        sqm,
        number_bathrooms,
        number_bedrooms,
        coords,
        price,
    } = body

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
        .then(apartment => {
            const { _id } = apartment

            // we save all files in the server
            if (files) {
                const files_promises = Object.keys(files).map((key, index) => {
                    return new Promise((resolve, reject) => {
                        files[key].mv(
                            __dirname + `/../../images/${_id}/${index}.jpg`,
                            err => {
                                if (err) {
                                    reject()
                                } else {
                                    resolve()
                                }
                            }
                        )
                    })
                })

                return Promise.all(files_promises)
                    .then(() =>
                        responseFactory(201, {
                            message: 'Apartment created successfully',
                            apartment,
                        })
                    )
                    .catch(() =>
                        responseFactory(500, {
                            message: 'Error while uploading file',
                        })
                    )
            }
            return responseFactory(201, {
                message: 'Apartment created successfully',
                apartment,
            })
        })
        .catch(err => {
            console.error('[Apartments] ', err)
            return responseFactory(400, { message: 'Missing argument ', err })
        })

    return res.status(response.statusCode).json({ data: response.data })
})

router.get('/', async (req, res) => {
    const { query } = req
    const { filters } = query
    if (filters) {
        const mongoFilters = filters.reduce((acc, filter) => {
            const { operator, field, value } = filter
            const mongoOperator = resolveOperator(operator)
            return {
                ...acc,
                [field]: {
                    ...acc[field],
                    [mongoOperator]: Number(value),
                },
            }
        }, {})

        Apartment.find(mongoFilters, (err, apartments) => {
            let response
            if (apartments) {
                response = responseFactory(200, {
                    apartments,
                })
            } else if (err) {
                response = responseFactory(500, {
                    message: 'Internal Error',
                    error: err,
                })
            }

            return res.status(response.statusCode).json(response.data)
        })
    } else return res.status(500).send()
})

/*
 * Get all apartments
 * */
router.get('/all', async (req, res) => {
    Apartment.find({}, (error, apartments) => {
        let response
        if (apartments && apartments.length > 0) {
            response = responseFactory(200, {
                apartments,
            })
        } else {
            response = responseFactory(404, { message: error })
        }

        return res.status(response.statusCode).json({ data: response.data })
    })
})

/*
 * Get apartment by ID
 * */
router.get('/:id', async (req, res) => {
    Apartment.findById(req.params.id, (err, apartment) => {
        let response
        if (err && !apartment) {
            response = responseFactory(404, {
                message: 'Apartment not found',
            })
        } else if (err) {
            response = responseFactory(500, {
                message: 'Internal Error',
                error: err,
            })
        } else if (apartment) {
            response = responseFactory(200, {
                apartment,
            })
        }

        return res.status(response.statusCode).json({ data: response.data })
    })
})

/*
 * Get image
 * */
router.use(express.static(__dirname + '/../../images'))

export default router
