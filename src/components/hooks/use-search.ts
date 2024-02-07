import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type HandlerOfSearchParamsProps = {
  key: string
  value: string
}

const useSearch = () => {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const pathname = usePathname()
  const { replace } = useRouter()
  const HandlerOfSearchParams = ({
    key,
    value
  }: HandlerOfSearchParamsProps) => {
    params.set(key, value)
    replace(`${pathname}?${params.toString()}`)
  }
  return { params, pathname, replace, HandlerOfSearchParams }
}

export default useSearch
