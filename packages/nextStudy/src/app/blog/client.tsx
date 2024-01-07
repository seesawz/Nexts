function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ message: 'hello' })
    }, 1000)
  })
}

export default async function Rsc() {
  const res = await getData()
  return (
    <div>
      <div>rsc</div>
      {res.message}
    </div>
  )
}
