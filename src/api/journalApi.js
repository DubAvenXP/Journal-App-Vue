import axios from 'axios';

const baseURL = 'https://vue-demos-ee313-default-rtdb.firebaseio.com'

const journalApi = axios.create({
    baseURL,
})

journalApi.interceptors.request.use(config => {
    config.params = {
        auth: localStorage.getItem('idToken'),
    }
    return config
})

export default journalApi;