  //不支持fetch但也想进行缓存的情况
  import { cache } from "react";

  export const getItem = cache( async (id: string) => {
    // const item = await db.item.findUnique({ where: { id } });
    // return item
  })
