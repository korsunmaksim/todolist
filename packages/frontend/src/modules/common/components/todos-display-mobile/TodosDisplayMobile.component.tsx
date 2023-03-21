import React from "react";
import { useNavigate } from "react-router-dom";
import { queryTodo } from "../querry-client";
import { ITodosProps } from "../../types/todo.types";
import * as Styled from "./TodosDisplayMobile.styled";
import Complete from "../../../../assets/image/complete.svg";

export const TodosDisplayMobile = ({ todos }: ITodosProps) => {
  const deleteTodo = queryTodo.useDeleteTodo();

  const completeTodo = queryTodo.useCompleteTodo();

  const navigate = useNavigate();
  return (
    <Styled.TodoListFormMobile>
      {todos?.map((todo) => (
        <Styled.Todo key={todo.id}>
          <Styled.TodoTitle>{todo.title}</Styled.TodoTitle>
          <Styled.TodoDescription>{todo.task}</Styled.TodoDescription>
          <Styled.ButtonsPanel>
            <div>
              <Styled.TodoButtonMobile
                onClick={() => navigate(`/todo/${todo.id}`)}
              >
                View
              </Styled.TodoButtonMobile>
              <Styled.DeleteTodo onClick={() => deleteTodo.mutate(todo.id)}>
                Delete
              </Styled.DeleteTodo>
            </div>
            <Styled.CompleteTodo
              onClick={() => completeTodo.mutate(todo)}
              src={Complete}
            />
          </Styled.ButtonsPanel>
        </Styled.Todo>
      ))}
    </Styled.TodoListFormMobile>
  );
};
