import axios from 'axios';

const api = axios.create({
    baseURL: 'https://meportfolio-nine.vercel.app/'
})

export default api

// const api = axios.create({
//     baseURL: 'http://localhost:3000'
// })

// export default api

