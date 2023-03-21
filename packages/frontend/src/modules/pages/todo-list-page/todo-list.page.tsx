import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { AddModal } from "../../common/components/modal";
import { TodosControlPanel } from "../../common/components/todos-control-panel/todos-control-panel.component";
import { TodosDisplayDesktop } from "../../common/components/todos-display-desktop";
import { TodosDisplayMobile } from "../../common/components/todos-display-mobile";
import * as Styled from "./todo_list.styled";
import { Header } from "../../common/components/header";
import { queryTodo } from "../../common/components/querry-client";

export const TodoListContainer = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [status, setStatus] = useState<boolean>(false);
  const todos = status
    ? queryTodo.useGetCompletedTodos()
    : queryTodo.useGetUncompletedTodos();

  if (todos.isSuccess || !todos.isLoading) {
    return (
      <>
        <Header />
        <Styled.TodoListPage>
          <TodosControlPanel status={status} setStatus={setStatus} />
          <Styled.AddTodoButton
            hidden={status}
            onClick={() => setModalActive(true)}
          >
            Add todo
          </Styled.AddTodoButton>
          {todos.data.length !== 0 ? (
            <>
              <TodosDisplayDesktop todos={todos.data} />
              <TodosDisplayMobile todos={todos.data} />
            </>
          ) : status ? (
            <h1>There are no completed todos</h1>
          ) : (
            <h1>There are no active todos</h1>
          )}
        </Styled.TodoListPage>
        <AddModal active={modalActive} setActive={setModalActive} />
        <ToastContainer />
      </>
    );
  }
  return <Styled.LoadingTitle>Loading ....</Styled.LoadingTitle>;
};
