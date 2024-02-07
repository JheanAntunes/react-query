import FormPost from '@/projeto/components/form-post'
import QueryPage from '@/projeto/query-page'

type SearchParams = {
  searchFilter?: string
  searchPagination?: string
  [key: string]: string | string[] | undefined
}
type HomeProps = {
  searchParams: SearchParams
}
export default function Home({ searchParams }: HomeProps) {
  const { searchPagination, searchFilter } = searchParams
  return (
    <main className="mx-auto grid grid-cols-1 gap-8 p-8">
      <FormPost />
      <QueryPage page={searchPagination} searchFilter={searchFilter} />
    </main>
  )
}
