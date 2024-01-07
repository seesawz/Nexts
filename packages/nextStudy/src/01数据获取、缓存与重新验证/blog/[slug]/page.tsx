
function Page({params}: {params: {slug: string}}){

  return (
    <div>
    my post {params.slug}
    </div>
  )
}

export default Page;
