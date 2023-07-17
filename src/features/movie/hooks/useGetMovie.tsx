import React from 'react';
import { getMovie } from '../queries';

const useGetMovie = (query: string) => {
  const [movie, setMovie] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    setLoading(true);
    const abortController = new AbortController();
    const signal = abortController.signal;
    getMovie(query, signal)
      .then((response: any) => setMovie(response))
      .catch((error) => {
        console.log('checking:' + error);
        setError(error);
      })
      .finally(() => setLoading(false));
    return () => {
      abortController.abort();
    };
  }, [query]);

  return { data: movie, loading, error };
};

export default useGetMovie;
