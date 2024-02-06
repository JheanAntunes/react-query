import CardPost from '@/components/ui/card-post'
import { Post } from '@/types/post'
import { Fragment } from 'react'

type QueryPostsProps = {
  posts: Post[]
}
const QueryPosts = ({ posts }: QueryPostsProps) => {
  return (
    <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        return (
          <Fragment key={post.id + post.userId}>
            <CardPost post={post} />
          </Fragment>
        )
      })}
    </section>
  )
}

export default QueryPosts
