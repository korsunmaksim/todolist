import { useMutation, useQuery } from "react-query";
import { QUERY_KEYS, QUERY_RESPONSES } from "./../../consts/app-keys.const";
import todoService from "../../../service/todo.service";
import { INewTodo, ITodo } from "../../types/todo.types";
import { queryClient } from ".";
import { ToastSuccess, ToastWarning } from "../toast";

class QueryTodo {
  public useGetCompletedTodos = () =>
    useQuery({
      queryKey: QUERY_KEYS.COMPLETED_TODOS,
      queryFn: () => todoService.getCompletedTodos(),
    });

  public useGetUncompletedTodos = () =>
    useQuery({
      queryKey: QUERY_KEYS.UNCOMPLETED_TODOS,
      queryFn: () => todoService.getUncompletedTodos(),
    });

  public useGetTodo = (id: string) =>
    useQuery({
      queryKey: [QUERY_KEYS.TODOS, id],
      queryFn: () => todoService.getTodoById(id!),
    });

  public useAddTodo = () =>
    useMutation({
      mutationFn: async (newTodo: INewTodo) => {
        await todoService.createTodo({
          ...newTodo,
        });
      },
      onSuccess: () => {
        ToastSuccess(QUERY_RESPONSES.ADD_TODO_SUCCESS);
        queryClient.invalidateQueries([QUERY_KEYS.TODOS]);
        queryClient.refetchQueries([QUERY_KEYS.COMPLETED_TODOS]);
        queryClient.refetchQueries([QUERY_KEYS.UNCOMPLETED_TODOS]);
      },
    });

  public useEditTodo = () =>
    useMutation({
      mutationFn: async (updatedTodo: ITodo) => {
        await todoService.updateTodo(updatedTodo.id, {
          ...updatedTodo,
        });
      },
      onSuccess: () => {
        ToastSuccess(QUERY_RESPONSES.EDIT_SUCCESS);
        queryClient.invalidateQueries([QUERY_KEYS.TODOS]);
        queryClient.refetchQueries([QUERY_KEYS.COMPLETED_TODOS]);
        queryClient.refetchQueries([QUERY_KEYS.UNCOMPLETED_TODOS]);
      },
    });
  public useCompleteTodo = () =>
    useMutation({
      mutationFn: async (todo: ITodo) => {
        await todoService.updateTodo(todo.id, {
          ...todo,
          completed: true,
        });
      },
      onSuccess: () => {
        ToastSuccess(QUERY_RESPONSES.COMPLETE_SUCCESS);
        queryClient.invalidateQueries([QUERY_KEYS.TODOS]);
        queryClient.refetchQueries([QUERY_KEYS.COMPLETED_TODOS]);
        queryClient.refetchQueries([QUERY_KEYS.UNCOMPLETED_TODOS]);
      },
    });

  public useUncompleteTodo = () =>
    useMutation({
      mutationFn: async (todo: ITodo) => {
        await todoService.updateTodo(todo.id, {
          ...todo,
          completed: false,
        });
      },
      onSuccess: () => {
        ToastWarning(QUERY_RESPONSES.UNCOMPLETE_WARNING);
        queryClient.invalidateQueries([QUERY_KEYS.TODOS]);
        queryClient.refetchQueries([QUERY_KEYS.COMPLETED_TODOS]);
        queryClient.refetchQueries([QUERY_KEYS.UNCOMPLETED_TODOS]);
      },
    });

  public useDeleteTodo = () =>
    useMutation({
      mutationFn: async (todoId: string) => {
        await todoService.deleteTodo(todoId);
      },
      onSuccess: () => {
        ToastSuccess(QUERY_RESPONSES.DELETE_SUCCESS);
        queryClient.invalidateQueries([QUERY_KEYS.TODOS]);
        queryClient.refetchQueries([QUERY_KEYS.COMPLETED_TODOS]);
        queryClient.refetchQueries([QUERY_KEYS.UNCOMPLETED_TODOS]);
      },
    });
}

const queryTodo = new QueryTodo();

export { queryTodo };
