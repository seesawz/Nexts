
export default function Home() {

  async function myAciton(formData: FormData) {
    //服务端组件使用
    //指的是可以在服务端运行的函数，但它可以在客户端被调用，就像正常的函数一样，而无须手动创建一个 API 路由。
    'use server'
    const name = formData.get('name')
    console.log(name);

  }

  return (
    <form action={myAciton}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  )
}

//还可以通过过props传递给组件
/* 
  <ClientComponent updateItem={updateItem} />

    'use client'
    export default function ClientComponent({ updateItem }) {
      return (
        <form action={updateItem}>
          <input type="text" name="name" />
          <button type="submit">Update Item</button>
        </form>
      )
    }


  //通过bind方法可以绑定参数
*/
