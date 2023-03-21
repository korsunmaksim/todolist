import { QueryClient } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      cacheTime: Infinity,
    },
  },
});

export { queryClient };
export { queryTodo } from "./todo-query";
export { queryUser } from "./user-query";
