import { CodeBlock, Input } from '@/components'
import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [code, setCode] = useState(`{ "foo": 'bar' }`)

  return (
    <>
      <Head>
        <title>JSON Viewer</title>
      </Head>
      <main className="grid gap-2 md:gap-0 md:h-screen md:grid-cols-2">
        <Input onChange={setCode} />
        <CodeBlock code={code} />
      </main>
    </>
  )
}
