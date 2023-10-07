import React from 'react';
import axios, { AxiosError } from 'axios';

const url = 'https://randomuser.me/api';

const useGetUsers = (pageIndex: string) => {
  const [data, setData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<null | Error | AxiosError>(null);

  React.useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    try {
      (async () => {
        const response = (await axios.get(`${url}?page=${pageIndex}`, { signal })).data;
        setData(response);
      })();
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) { // err instanceof Error
        console.log(err);
        setError(err);
      } else {
        console.log(err);
      }
    } finally {
      setIsLoading(false);
    }
    return () => {
      controller.abort();
    };
  }, [pageIndex]);
  return { data, isLoading, error };
};

const Beginner = () => {
  const [pageIndex, setPageIndex] = React.useState(1);
  const { data, isLoading, error } = useGetUsers(pageIndex.toString());
  return error ? (
    <p>{error.message}</p>
  ) : isLoading ? (
    <div>isLoading ...</div>
  ) : (
    <div>
      <p>Page: {pageIndex}</p>
      <button onClick={()=>setPageIndex(prev=>prev+1)}>Get next page</button>
      <pre>{JSON.stringify(data, null, '\t')}</pre>
    </div>
  );
};

export default Beginner;
