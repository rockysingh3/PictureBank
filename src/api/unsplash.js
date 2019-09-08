import axios from 'axios'


export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 82088ca401ffcf27a3a3d2fa06e48a2198cc2c090dc80e8a90f2d3a7a31cdced'
    }
})