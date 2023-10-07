import React from 'react';
import z from 'zod'
import axios from 'axios';
const url = 'https://pokeapi.co/api/v2/pokemon';

const PokemonSchema = z.object({
  name: z.string(),
  url: z.string().url(),
})
type PokemonType = z.infer<typeof PokemonSchema>

const useGetPokemons = (pageIndex: number) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);
  const [data, setData] = React.useState< PokemonType[] | null>(null);
  React.useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    (async () => {
      setIsLoading(true);
      try {
        const response = z.array(PokemonSchema).parse((await axios.get(`${url}?limit=5&offset=${pageIndex * 5}`, { signal }))
          .data.results)
        setData(prev=>[...(prev ?? []), ...response]);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err);
        }
      } finally {
        setIsLoading(false);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [pageIndex]);
  return { data, isLoading, error };
};

const Poke = () => {
  const [pageIndex, setPageIndex] = React.useState(0);
  const { data, isLoading, error } = useGetPokemons(pageIndex);
  return data ? (
    <div>
      <h1>Poke list</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <button onClick={() => setPageIndex((prev) => prev + 1)}>Load more</button>
    </div>
  ) : error ? (
    <div>{error.message}</div>
  ) : isLoading ? (
    <div>Loading...</div>
  ) : null;
};

export default Poke;
