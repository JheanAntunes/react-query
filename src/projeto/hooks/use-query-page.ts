import useQueryPosts from '@/components/hooks/use-query-posts'
import { utilSearchFilter } from '../utils/search-filter'
import utilPagination from '../utils/util-pagination'
import useHandlePagination from './use-handle-pagination'

type useQueryPageProps = {
  page?: string
  searchFilter?: string
}
const useQueryPage = ({ page, searchFilter }: useQueryPageProps) => {
  // Gerenciamento do state da paginação pela URL
  const { handleChangePagination } = useHandlePagination()

  //fetch
  const { dataPosts, error, isLoading } = useQueryPosts()

  // Paginação
  const { posts, totalPagination, currentPage } = utilPagination({
    data: dataPosts,
    page
  })

  const data = searchFilter
    ? utilSearchFilter({ data: posts, search: searchFilter })
    : posts

  return {
    posts: data,
    totalPagination,
    error,
    isLoading,
    currentPage,
    handleChangePagination
  }
}

export default useQueryPage
