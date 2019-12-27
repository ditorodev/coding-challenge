import axios from 'axios'

console.warn(process.env.REACT_APP_ENDPOINT)

export default axios.create({
    baseURL: process.env.REACT_APP_ENDPOINT,
    timeout: 60000,
})
