import axios from 'axios';

const baseURL = 'https://identitytoolkit.googleapis.com/v1/accounts';

const authApi = axios.create({
    baseURL,
    params: {
        key: 'AIzaSyD308oPGbIXIKSEW_YVKdk9WJ4iQRKzH7w'
    }
})

export default authApi;