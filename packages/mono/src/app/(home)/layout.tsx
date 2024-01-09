import { PropsWithChildren } from "react";

//设置重新验证时间为60s
export const revalidate = 60

export default async function HomeLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  )
}
