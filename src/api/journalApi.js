import axios from 'axios';

const baseURL = 'https://vue-demos-ee313-default-rtdb.firebaseio.com'

const journalApi = axios.create({
    baseURL,
})

export default journalApi;