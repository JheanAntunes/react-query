'use client'
import LoadingPost from '@/components/ui/loading-post'
import { Pagination } from '@nextui-org/pagination'
import QueryPosts from './components/posts'
import useQueryPage from './hooks/use-query-page'
type QueryPageProps = {
  page?: string
}
const QueryPage = ({ page }: QueryPageProps) => {
  const {
    posts,
    totalPagination,
    currentPage,
    handleChangePagination,
    error,
    isLoading
  } = useQueryPage({ page })

  //tratamento de requisição https
  if (error) console.log('QueryPost: ', error)
  if (isLoading) return <LoadingPost />

  return (
    <div>
      <QueryPosts posts={posts} />
      <Pagination
        total={totalPagination}
        initialPage={currentPage}
        onChange={handleChangePagination}
      />
    </div>
  )
}

export default QueryPage
