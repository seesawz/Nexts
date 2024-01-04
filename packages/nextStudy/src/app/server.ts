//客户端组件使用
//当使用这种顶层的 'use server' 指令的时候，
//下面所有的导出都会被认为是 Server Actions，所以你可以在一个文件里定义多个 Server Action。
'use server'
import { revalidatePath, revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'


export async function myAction(formData: FormData) {
  
}

//Server Actions 允许你按需重新验证数据
 
export default async function submit() {
  //await submitForm()
  //任选其一
  revalidatePath('/')
  revalidateTag('posts')

  

  //如果你希望 Server Action 结束之后重定向到其他路由，你可以使用 redirect 到一个相对或者固定地址。
  //redirect(`/post/${id}`) // Navigate to new route
}
