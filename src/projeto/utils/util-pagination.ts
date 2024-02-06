import { Post } from '@/types/post'

type UtilPaginationProps = {
  page?: string
  data?: Post[]
}
const utilPagination = ({ data, page }: UtilPaginationProps) => {
  if (!data) {
    return {
      posts: [],
      totalPagination: 0,
      currentPage: page ? Number(page) : 1
    }
  }
  // Paginação
  const perPage = 10
  const currentPage = page ? Number(page) : 1
  const sliceLastIndex = perPage * currentPage
  const sliceFirstIndex = sliceLastIndex - perPage
  const posts = data.slice(sliceFirstIndex, sliceLastIndex)
  const totalPagination = Math.ceil(data.length / perPage)

  return {
    posts,
    totalPagination,
    currentPage
  }
}

export default utilPagination
