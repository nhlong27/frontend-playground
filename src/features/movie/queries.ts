import axios from 'axios'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
import {z} from 'zod'

const MovieSchema = z.object({
    id: z.number(),
    title: z.string(),
}).partial()

const MoviesSchema = z.array(MovieSchema)

export type MoviesType = z.infer<typeof MoviesSchema>

export const getMovies = async (query: string, signal: AbortSignal) => {
    return MoviesSchema.parse((await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}`, {signal})).data.results)
}