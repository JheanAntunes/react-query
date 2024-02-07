'use client'
import useSearch from '@/components/hooks/use-search'
import { Input } from '@nextui-org/react'
import { SearchIcon } from 'lucide-react'
import { useDebouncedCallback } from 'use-debounce'
const FormPost = () => {
  const { HandlerOfSearchParams } = useSearch()

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    HandlerOfSearchParams({ key: 'searchFilter', value: e.target.value })
  }

  const debouncedChange = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => handlerChange(e),
    1000
  )
  return (
    <form
      onSubmit={handlerSubmit}
      className="flex h-[240px] w-full max-w-80 items-center justify-center rounded-2xl px-8 md:max-w-2xl lg:max-w-5xl"
    >
      <search className="w-full max-w-5xl">
        <Input
          onChange={debouncedChange}
          label="Pesquisar"
          isClearable
          radius="lg"
          classNames={{
            label: 'text-black/50 dark:text-white/90',
            input: [
              'text-black/90 dark:text-white/90 w-full',
              'placeholder:text-default-700/50 dark:placeholder:text-white/70'
            ]
          }}
          placeholder="Título do post"
          startContent={
            <SearchIcon
              width={20}
              height={20}
              color="gray"
              className="pointer-events-none  mb-0.5 flex-shrink-0 text-white/70 dark:text-white/90"
            />
          }
        />
      </search>
    </form>
  )
}

export default FormPost
