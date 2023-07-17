import React from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const fetchData = async (signal: AbortSignal) => {
  let response = (await axios.get('https://randomuser.me/api', { signal })).data;
  return flattenObj(response.results[0].location, null);
};

function flattenObj(
  obj: Record<string, any>,
  parent: string | null,
  res: { [key: string]: string } = {},
) {
  for (let key in obj) {
    let propName = parent ? parent + '_' + key : key;
    if (typeof obj[key] == 'object') {
      flattenObj(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
}

const Mid = () => {
  const [data, setData] = React.useState<Record<string, string> | null>(null);
  const [_, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetchData(signal)
      .then((response) => setData(response))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
    return () => {
      controller.abort();
    };
  }, []);
  console.log(data)
  return data ? (
    <>
      <pre>{JSON.stringify(data, null, '\t')}</pre>
      <Table>
      <TableCaption>Locations.</TableCaption>
      <TableHeader>
        <TableRow>
          {Object.keys(data).map((key) => (
            <TableHead>{key}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
        {Object.values(data).map((values) => (
            <TableCell>{values}</TableCell>
        ))}
          </TableRow>
      </TableBody>
    </Table>
    </>
  ) : error ? (
    <div>error</div>
  ) : (
    <div>loading</div>
  );
};

export default Mid;
