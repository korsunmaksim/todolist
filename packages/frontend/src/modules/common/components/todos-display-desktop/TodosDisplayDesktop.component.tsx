import React from "react";
import { queryTodo } from "../querry-client";
import { ITodosProps } from "../../types/todo.types";
import { COLORS } from "../../../theme";
import * as Styled from "./TodosDisplayDesktop.styled";
import { useNavigate } from "react-router-dom";
import Complete from "../../../../assets/image/complete.svg";

export const TodosDisplayDesktop = ({ todos }: ITodosProps) => {
  const navigate = useNavigate();

  const deleteTodo = queryTodo.useDeleteTodo();

  const completeTodo = queryTodo.useCompleteTodo();

  const checkColor = (index: number) =>
    index % 2 === 0 ? COLORS.aribute : COLORS.white;

  return (
    <Styled.TodoListFormDesktop>
      <Styled.Categories>
        <Styled.Category className="20%">Todo title</Styled.Category>
        <Styled.Category className="60%">Description</Styled.Category>
        <Styled.Category className="20%">Actions</Styled.Category>
      </Styled.Categories>
      {todos.map((todo, i) => (
        <Styled.TodoAtributes key={todo.id} color={checkColor(i)}>
          <Styled.TodoAtribute className="20%">
            {todo.title}
          </Styled.TodoAtribute>
          <Styled.TodoAtribute className="60%">{todo.task}</Styled.TodoAtribute>
          <Styled.ActionsAtribute className="20%">
            <Styled.TodoButton onClick={() => navigate(`/todo/${todo.id}`)}>
              View
            </Styled.TodoButton>
            <Styled.DeleteTodo
              type="button"
              onClick={() => {
                deleteTodo.mutate(todo.id);
              }}
            >
              Delete
            </Styled.DeleteTodo>
            <Styled.CompleteTodo
              hidden={todo.completed}
              onClick={() => completeTodo.mutate(todo)}
              src={Complete}
            />
          </Styled.ActionsAtribute>
        </Styled.TodoAtributes>
      ))}
      <Styled.Block>
        <Styled.StraightLine className="20%" />
        <Styled.StraightLine className="60%" />
        <Styled.StraightLine className="20%" />
      </Styled.Block>
    </Styled.TodoListFormDesktop>
  );
};
