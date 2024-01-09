import { QueryClient } from "@tanstack/react-query";

//新建一个共享的queryClient
const sharedClient = new QueryClient({
  defaultOptions:{
    queries:{
      // staleTime：过期时间，当数据过期后，会重新请求数据
      staleTime: 1000 * 3,
      //gcTime：垃圾回收时间，当数据不再使用时，会在gcTime时间后清除
      gcTime: 1000 * 3
    }
  }
});

export const getQueryClient = () => sharedClient
