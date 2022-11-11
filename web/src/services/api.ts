import axios from 'axios'
import {THEMOVIEDB_CONFIG} from '../config/themoviedb'

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
})

api.defaults.params = {...THEMOVIEDB_CONFIG}

export default api
