import axios from 'axios';

const api = axios.create({
    baseURL: 'https://meportfolio-nine.vercel.app/'
})

export default api

