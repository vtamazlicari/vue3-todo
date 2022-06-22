import axios from "axios"

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
})

api.interceptors.request.use((config) => {
    console.log('Request')

    return config
})

api.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401: {
                    console.log('401: unauthorized')
                }
                default: {
                    console.log(error.response.status, ' general error')
                }
            }

            return Promise.reject(error.response.data);
        }
    });

export default api