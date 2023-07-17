import axios from 'axios'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const url = 'https://api.themoviedb.org/3/search/multi'
export const getMovie = async (query: string, signal: AbortSignal) => { 
    return (await axios.get(`${url}?api_key=${API_KEY}&query=${query}`, {signal})).data
    // throw new Error('Not implemented')
}
