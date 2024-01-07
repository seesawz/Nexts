
async function Page() {
  //const res = await getData()
  return (
    <div>

    </div>
  )
}

//没有use client 都是直接从服务器端发送
async function getData() {
  // fetch 的 cache 选项用于控制该请求的缓存行为
  // 默认就是 'force-cache', 平时写的时候可以省略
  const res = await fetch(
    'https://api.github.com/search/repositories?q=v&sort=stars',
    { cache: 'force-cache' }
  )
  if (!res.ok) {
    throw new Error('error')
  }
  return res.json()
}


/* 
  重新验证
  缓存数据会过期，更新缓存就叫重新验证

  1.基于时间的重新验证
  2.按需重新验证 根据事件手动重新验证数据
 */

//基于时间 过期后便会重新获取数据
async function getData2() {
  const res = await fetch(
    'https://api.github.com/search/repositories?q=v&sort=stars',
    { next: { revalidate: 3600 } }
  )

  return res.json()
}

//按需重新验证
async function getData3() {
  const res = await fetch(
    'https://api.github.com/search/repositories?q=v&sort=stars',
    { next: { tags: ['collection'] } }
  )

  return res.json()
}
/* 
    import { revalidateTag } from 'next/cache'
    
    export default async function action() {
      //发起重新验证
      revalidateTag('collection')
    }
 */

export default Page;  
