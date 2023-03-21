import React from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../common/components/header";
import { queryTodo } from "../../common/components/querry-client";
import { Todo } from "../../common/components/todo";

export const TodoPage = () => {
  const { id } = useParams<{ id: string }>();
  const todo = queryTodo.useGetTodo(id!);

  if (todo.data !== undefined) {
    return (
      <>
        <Header />
        <Todo todo={todo.data} />
      </>
    );
  }
  return <h1>{"Todo loading..."}</h1>;
};
