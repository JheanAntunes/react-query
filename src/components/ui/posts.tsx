'use client'
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Fragment } from 'react'
import useQueryPosts from '../hooks/use-query-posts'
import AddPost from './add-post'
import CardPost from './card-post'
import LoadingPost from './loading-post'

const Posts = () => {
  const { dataPosts, error, isLoading } = useQueryPosts()
  const queryClient = useQueryClient()
  console.log('Re-render Component Posts com novos dados')

  const { mutateAsync: addPostMutation } = useMutation({
    mutationFn: AddPost,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['posts-cache'] })
      console.log('Sucesso, atualizando o dado em cache')
    }
  })
  const handleClickAddPost = async () => {
    try {
      await addPostMutation({ title: 'Jhean' })
      console.log('onclick')
    } catch (error) {
      console.log('handleClickAddPost: ', error)
    }
  }

  if (isLoading) return <LoadingPost />

  if (error) console.log('Component Post: ', error)

  return (
    <div className="grid gap-8">
      <div>
        <Input type="text" placeholder="Título" />
        <Button onClick={handleClickAddPost}>Adicionar novo Post</Button>
      </div>
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {dataPosts &&
          dataPosts.map((post, index) => {
            if (index > 9) return null
            return (
              <Fragment key={post.id + post.userId}>
                <CardPost post={post} />
              </Fragment>
            )
          })}
      </section>
    </div>
  )
}

export default Posts
