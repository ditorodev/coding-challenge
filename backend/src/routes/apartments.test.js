import supertest from 'supertest'
import { app } from '../index'
import Apartment from '../models/apartment'

const request = supertest(app)

describe('APARTMENTS API', () => {
    it('should get all apartments', async done => {
        const res = await request.get('/apartments')
        const body = res.body
        expect(body.statusCode).toEqual(200)
        expect(body.data.apartments).toBeDefined()
        done()
    }, 60000)

    it('should error with no apartments', async done => {
        const res = await request.get('/apartments')
        const body = res.body

        expect(body.statusCode).toEqual(404)
        expect(body.data.message).toBeDefined()
        done()
    })

    it('should create an apartment', async done => {
        const obj = {
            price: 100,
            sqm: 10,
            title: 'Test Apartment',
            number_bathrooms: 2,
            number_bedrooms: 2,
            coords: { lat: 10, lon: 200 },
        }
        const res = await request.post('/apartments').send(obj)
        const body = res.body
        expect(body.statusCode).toEqual(201)
        expect(body.data.message).toBeDefined()
        done()
    }, 60000) // timeout is 60s bc internet in venezuela is slow af :( and im using mongo atlas for simplicity

    it('should error because of missing argument', async done => {
        const obj = {}
        const res = await request.post('/apartments').send(obj)
        const body = res.body

        expect(body.statusCode).toEqual(400)
        expect(body.data.message).toContain('Missing argument')

        done()
    })
})
