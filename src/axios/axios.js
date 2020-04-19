import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=e9f5217c460c42f7826f02144e6c573c'
});

// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...

export default instance;