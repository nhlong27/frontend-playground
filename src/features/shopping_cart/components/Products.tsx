import React from 'react';
import { useGetProducts } from '../hooks/useGetProducts';

const Products = () => {
  const { data, error } = useGetProducts();
  return (
    <div className='basis-3/5'>
      <h1>Products</h1>
      {data ? (
          <ul className='flex flex-wrap gap-4'>
            {data.map((product, index) => (
              <li key={index} className='w-[200px] h-auto hover:opacity-70 '>
                <img
                  src={`https://unsplash.com/photos/${product.image}`}
                  alt='image'
                  width={200}
                  height={200}
                  className='bg-gray-300'
                />
                <div className='text-3xl font-semibold'>{product.name}</div>
                <div>{product.price}</div>
                <p>{product.description}</p>
              </li>
            ))}
          </ul>
      ) : error instanceof Error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Products;
