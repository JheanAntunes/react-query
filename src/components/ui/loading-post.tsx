import { Skeleton } from '@nextui-org/skeleton'
const LoadingPost = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <Skeleton className="h-56 w-96 rounded" />
      <Skeleton className="h-56 w-96 rounded" />
      <Skeleton className="h-56 w-96 rounded" />
      <Skeleton className="h-56 w-96 rounded" />
      <Skeleton className="h-56 w-96 rounded" />
      <Skeleton className="h-56 w-96 rounded" />
    </div>
  )
}

export default LoadingPost
