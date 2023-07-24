import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../api-mock/getProducts"

export const useGetProducts = () => {
  const {data, isLoading ,error } = useQuery({queryKey: ['products'], queryFn: getProducts} )
  return {data, isLoading, error}
}