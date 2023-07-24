import React from 'react';
import Products from './Products';
import Cart from './Cart';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {atom} from 'jotai'

const cartProducts = atom<Array<any>>([])

const queryClient = new QueryClient();
const ShoppingPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='w-screen min-h-screen flex flex-col'>
        <h1 className='w-full'>Shopping Page</h1>
        <div className='flex gap-8'>
          <Products />
          <Cart />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default ShoppingPage;
