import { PropsWithChildren } from "react";
import { getQueryClient } from "../../lib/query-client.server";

//设置重新验证时间为60s
export const revalidate = 60

export default async function HomeLayout(props: PropsWithChildren) {
  const queryClient = getQueryClient()
}
