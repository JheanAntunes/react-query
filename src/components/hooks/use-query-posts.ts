import { Post } from '@/types/post'
import { useQuery } from '@tanstack/react-query'

const useQueryPosts = () => {
  const {
    data: dataPosts,
    isLoading,
    error
  } = useQuery({
    queryKey: ['posts-cache'],
    queryFn: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!response.ok) throw new Error('Post: Failed fetch')
      const data: Post[] = await response.json()
      return data
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false
  })
  return {
    dataPosts,
    isLoading,
    error
  }
}

export default useQueryPosts
