import QueryPage from '@/projeto/query-page'

type SearchParams = {
  search?: string
  [key: string]: string | string[] | undefined
}
type HomeProps = {
  searchParams: SearchParams
}
export default function Home({ searchParams }: HomeProps) {
  const { search } = searchParams
  return (
    <main className="mx-auto px-8">
      <QueryPage page={search} />
    </main>
  )
}
