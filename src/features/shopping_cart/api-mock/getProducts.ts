import products from './products.json' assert { type: 'json' };
import {z} from 'zod'

const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  image: z.string(),
  description: z.string(),
})

export const getProducts = () => { 
  return new Promise((resolve, _)=> {
    setTimeout(()=>{
      resolve(products)
    }, 2000)
  }).then(response=> z.array(ProductSchema).parse(response)).catch((err: unknown)=> {if (err instanceof Error) console.log(err)})
}