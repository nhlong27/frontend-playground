import React from 'react';
import { MoviesType, getMovies } from '../queries';

export const useGetMovies = (query: string) => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState(null)
  const [data, setData] = React.useState<null | MoviesType>(null)
  React.useEffect(()=>{
    const controller = new AbortController();
    const signal = controller.signal;
    try {
      getMovies(query, signal).then((response: MoviesType) => {
        console.log(response)
        setData(response)
      })
    }
    catch (err: any) {
      setError(err)
    }
    finally {
      setIsLoading(false)
    }

    return () => {
      controller.abort();
    }
  },[query])
  return {data, error, isLoading}
}