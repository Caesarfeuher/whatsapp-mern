import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://whatsapp-mern-backend-wine.vercel.app/',
})
export default instance;