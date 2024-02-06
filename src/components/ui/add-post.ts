'use server'

type AddPostProps = {
  title: string
}
const AddPost = async ({ title }: AddPostProps) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  console.log('Novo post adicionado: ', title)
  // Request com method post
  // fetch(url, {method: POST,headers:{'Content-Type:application/json'}body:JSON.stringfy(post)})
}

export default AddPost
