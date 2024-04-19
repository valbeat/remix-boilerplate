import { PropsWithChildren } from 'react'

type ExampleButtonProps = {
  onClick: () => void
}

export const ExampleButton = (props: PropsWithChildren<ExampleButtonProps>) => {
  return (
    <button
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      onClick={() => props.onClick()}
    >
      {props.children}
    </button>
  )
}
