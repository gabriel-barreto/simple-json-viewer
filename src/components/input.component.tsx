import { ChangeEvent } from 'react'

interface InputProps {
  onChange: (value: string) => void
}

export function Input({ onChange }: InputProps) {
  function onChangeHandler({ target }: ChangeEvent<HTMLInputElement>) {
    const { innerText = '' } = target
    const cleanText = innerText.replace(/\n/g, '').replace(/\s{2,}/g, '')
    try {
      const json = JSON.parse(cleanText)
      onChange(JSON.stringify(json, null, 2))
    } catch (ex) {
      onChange('')
    }
  }

  return (
    <div
      className="appearance-none bg-gray-900 font-mono h-full leading-tight p-4 text-gray-100 shadow w-full focus:outline-none focus:shadow-outline"
      contentEditable
      onInput={onChangeHandler}
    />
  )
}
