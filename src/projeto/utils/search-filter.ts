import { Post } from '@/types/post'

type UtilSearchFilterProps = {
  data: Post[]
  search: string
}
export const utilSearchFilter = ({ data, search }: UtilSearchFilterProps) => {
  const filter = data.filter((post) =>
    post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  )
  return filter
}
