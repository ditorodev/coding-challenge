import supertest from 'supertest'
import qs from 'qs'
import { app } from '../index'

const request = supertest(app)

describe('APARTMENTS API', () => {
    it('should error with no apartments', async done => {
        const res = await request.get('/apartments/all')
        const body = res.body

        expect(res.status).toEqual(404)
        expect(body.data.message).toBeDefined()
        done()
    }, 60000)

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

        expect(res.status).toEqual(201)
        expect(body.data.message).toBeDefined()
        done()
    }, 60000) // timeout is 60s bc internet in venezuela is slow af :( and im using mongo atlas for simplicity

    it('should error because of missing argument', async done => {
        const obj = {}
        const res = await request.post('/apartments').send(obj)
        const body = res.body

        expect(res.status).toEqual(400)
        expect(body.data.message).toContain('Missing argument')

        done()
    })

    it('should give one apartment with id', async done => {
        const obj = {
            price: 100,
            sqm: 10,
            title: 'Test Apartment',
            number_bathrooms: 2,
            number_bedrooms: 2,
            coords: { lat: 10, lon: 200 },
        }
        const {
            body: { data },
        } = await request.post('/apartments').send(obj)
        const { _id } = data.apartment
        const res = await request.get('/apartments/' + _id)
        const body = res.body

        expect(res.status).toEqual(202)
        expect(body.data.apartment).toBeDefined()
        expect(body.data.apartment._id).toEqual(_id)

        done()
    }, 60000)

    it('should give error with apartment not found', async done => {
        const _id = 1
        const res = await request.get('/apartments/' + _id)
        const body = res.body

        expect(res.status).toEqual(404)
        expect(body.data.apartment).not.toBeDefined()

        done()
    }, 60000)

    it('should correctly filter by price', async done => {
        const obj = {
            price: 200,
            sqm: 10,
            title: 'Test Apartment',
            number_bathrooms: 2,
            number_bedrooms: 2,
            coords: { lat: 10, lon: 200 },
        }
        await request.post('/apartments').send(obj)

        const filters = [
            {
                field: 'price',
                value: 100,
                operator: '>=',
            },
            {
                field: 'price',
                value: 800,
                operator: '<=',
            },
        ]

        const query = qs.stringify({ filters })
        const res = await request.get('/apartments/').send(query)
        const body = res.body

        expect(res.status).toEqual(202)
        expect(body.apartment[0].price).toBeGreaterThanOrEqual(100)
        expect(body.apartment[0].price).toBeLessThanOrEqual(800)

        done()
    }, 60000)

    it('should get all apartments', async done => {
        const res = await request.get('/apartments/all')
        const body = res.body
        expect(res.status).toEqual(200)
        expect(body.data.apartments).toBeDefined()
        done()
    }, 60000)
})
