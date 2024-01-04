import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://whatsapp-mern-backend-nine.vercel.app/',
})
export default instance;