import { Post } from '@/types/post'
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link
} from '@nextui-org/react'

type CardPostProps = {
  post: Post
}
export default function CardPost({ post }: CardPostProps) {
  const { id, title, body } = post
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">{title}</p>
          <p className="text-small text-default-500">Identificação: {id}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{body}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  )
}
