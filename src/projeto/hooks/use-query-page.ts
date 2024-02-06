import useQueryPosts from '@/components/hooks/use-query-posts'
import utilPagination from '../utils/util-pagination'
import useHandlePagination from './use-handle-pagination'

type useQueryPageProps = {
  page?: string
}
const useQueryPage = ({ page }: useQueryPageProps) => {
  // Gerenciamento do state da paginação pela URL
  const { handleChangePagination } = useHandlePagination()

  //fetch
  const { dataPosts, error, isLoading } = useQueryPosts()

  // Paginação
  const { posts, totalPagination, currentPage } = utilPagination({
    data: dataPosts,
    page
  })
  return {
    posts,
    totalPagination,
    error,
    isLoading,
    currentPage,
    handleChangePagination
  }
}

export default useQueryPage
