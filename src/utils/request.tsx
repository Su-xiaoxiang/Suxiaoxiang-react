import axios from 'axios'

const requestInstance = axios.create({
    baseURL: 'xxxxxxxxxxx',
    timeout: 5000,
})

requestInstance.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

requestInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default requestInstance