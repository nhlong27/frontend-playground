import React from 'react';
import { useGetMovies } from '../hooks/useGetMovie';

const Movie = () => {
  const [query, setQuery] = React.useState('');
  const [value, setValue] = React.useState('');
  const { data, error, isLoading } = useGetMovies(query);
  return data ? (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault();
        setQuery(value)
      }}>

      <input type='text' value={value} onChange={(e) => setValue(e.currentTarget.value)} />
      <button type='submit'>Search</button>
      </form>
      <pre>{JSON.stringify(data, null, '\t')}</pre>
    </div>
  ) : error ? (
    <div>error</div>
  ) : (
    <div>loading</div>
  );
};

export default Movie;
