import products from './products.json' assert { type: 'json' };
import {z} from 'zod'

const ProductsSchema = z.array(z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  image: z.string(),
  description: z.string(),
}))

export type Products = z.infer<typeof ProductsSchema>

export const getProducts = async () => {
  return (new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(products)
    },1000)
  })).then(response => ProductsSchema.parse(response))
}