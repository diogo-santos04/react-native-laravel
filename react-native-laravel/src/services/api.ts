import axios from 'axios'

const api = axios.create({
    baseURL: 'http://10.42.20.54:8000/api'
})

export { api }