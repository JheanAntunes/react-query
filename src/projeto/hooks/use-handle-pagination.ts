import useSearch from '@/components/hooks/use-search'

const useHandlePagination = () => {
  //handle searchParams url
  const { params, pathname, replace } = useSearch()

  const handleChangePagination = (page: number) => {
    // add searchParams -> search=page
    params.set('search', page.toString())
    replace(`${pathname}?${params.toString()}`)
  }

  return {
    handleChangePagination
  }
}

export default useHandlePagination
