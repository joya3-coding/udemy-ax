import axios from 'axios';

const instance = axios.create({
    baseURL:
        "https://firestore.googleapis.com/v1/projects/vuejs-udemy-6c9ae/databases/(default)/documents"
});

export default instance;