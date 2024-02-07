'use client'
import LoadingPost from '@/components/ui/loading-post'
import { Pagination } from '@nextui-org/pagination'
import QueryPosts from './components/posts'
import useQueryPage from './hooks/use-query-page'
type QueryPageProps = {
  page?: string
  searchFilter?: string
}
const QueryPage = ({ page, searchFilter }: QueryPageProps) => {
  const {
    posts,
    totalPagination,
    currentPage,
    handleChangePagination,
    error,
    isLoading
  } = useQueryPage({ page, searchFilter })

  //tratamento de requisição https
  if (error) console.log('QueryPost: ', error)
  if (isLoading) return <LoadingPost />

  return (
    <div className="grid grid-cols-1 gap-8">
      <QueryPosts posts={posts} />
      <div className="flex w-full items-center justify-center">
        <Pagination
          total={totalPagination}
          initialPage={currentPage}
          onChange={handleChangePagination}
        />
      </div>
    </div>
  )
}

export default QueryPage
