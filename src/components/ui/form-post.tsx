'use client'
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import { QueryClient, useMutation } from '@tanstack/react-query'
import AddPost from './add-post'

type FormPostProps = {
  queryClient: QueryClient
}
const FormPost = ({ queryClient }: FormPostProps) => {
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

  return (
    <div>
      <Input type="text" placeholder="Título" />
      <Button onClick={handleClickAddPost}>Adicionar novo Post</Button>
    </div>
  )
}

export default FormPost
