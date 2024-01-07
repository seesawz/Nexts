'use client'
import { Suspense } from 'react'
import Client from './client'
import Rsc from './rsc'
export default function Page() {
  return (
    <div className='text-[pink]'>
      <Suspense fallback={<div>loading...</div>}>
        <Client />
      </Suspense>
      <Rsc />
    </div>
  )
}
