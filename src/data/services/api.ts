import axios from 'axios';

// const api = axios.create({
//     baseURL: 'https://admin-template-coral.vercel.app/',
// })

// export default api

// DEV REQUEST

const api = axios.create({
    baseURL: 'http://localhost:3000',
})

export default api