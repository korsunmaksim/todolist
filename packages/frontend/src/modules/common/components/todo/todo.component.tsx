import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { queryTodo } from "../querry-client";
import { ToggleButton } from "../toggle-button";
import { ITodo } from "../../types/todo.types";
import * as Styled from "./todo.styled";
import { EditModal } from "../modal";
import { ToastContainer } from "react-toastify";

interface ITodoProps {
  todo: ITodo;
}

export const Todo = ({ todo }: ITodoProps) => {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState(false);
  const completeTodo = queryTodo.useCompleteTodo();
  const uncompleteTodo = queryTodo.useUncompleteTodo();
  return (
    <Styled.Container>
      <Styled.Title>{todo.title}</Styled.Title>
      <Styled.DescriptionTitle>Description:</Styled.DescriptionTitle>
      <Styled.Description>{todo.task}</Styled.Description>
      <Styled.Complete>
        <h4>Completed</h4>
        <ToggleButton
          todo={todo}
          onClickExtraFunc={() => {
            todo.completed
              ? uncompleteTodo.mutate(todo)
              : completeTodo.mutate(todo);
          }}
          startValue={todo.completed}
          isLoading={
            todo.completed ? uncompleteTodo.isLoading : completeTodo.isLoading
          }
        />
      </Styled.Complete>
      <Styled.Buttons>
        <Styled.BackButton onClick={() => navigate(-1)}>Back</Styled.BackButton>
        <Styled.UpdateButton onClick={() => setActiveModal(true)}>
          Update
        </Styled.UpdateButton>
      </Styled.Buttons>
      <EditModal todo={todo} active={activeModal} setActive={setActiveModal} />
      <ToastContainer />
    </Styled.Container>
  );
};
