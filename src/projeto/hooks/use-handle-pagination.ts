import useSearch from '@/components/hooks/use-search'

const useHandlePagination = () => {
  //handler searchParams url
  const { HandlerOfSearchParams } = useSearch()

  const handleChangePagination = (page: number) => {
    HandlerOfSearchParams({ key: 'searchPagination', value: page.toString() })
  }

  return {
    handleChangePagination
  }
}

export default useHandlePagination
