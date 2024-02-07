'use client' // Error components must be Client Components

import { Button } from '@nextui-org/button'
import { useEffect } from 'react'

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex w-full items-center justify-center">
      <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl">
        Ocorreu algo errado!
      </h2>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Fazer uma nova tentativa.
      </Button>
    </div>
  )
}
