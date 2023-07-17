import React from 'react';
import useGetMovie from '../hooks/useGetMovie';

const Movie = () => {
  const [query, setQuery] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');
  const { data, loading, error } = useGetMovie(query);
  return (
    <>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={() => setQuery(inputValue)}>search</button>
      {data ? (
        <ul>
          {data?.results?.map((movie: any, index: number) => (
            <li key={index}>
              <div>{movie.title}</div>
              <img src={`https://api.themoviedb.org${movie.poster_path}`} alt='anything' />
            </li>
          ))}
        </ul>
      ) : error ? (
        <div>error: {error?.message} </div>
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export default Movie;
