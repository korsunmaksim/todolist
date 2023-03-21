import React, { useCallback } from "react";
import { Formik } from "formik";
import * as Styled from "./modal.styled";
import { queryTodo } from "../querry-client";
import { IEditModalProps } from "../../types/todo.types";

export const EditModal = ({ todo, active, setActive }: IEditModalProps) => {
  const editTodo = queryTodo.useEditTodo();

  const validateTitle = useCallback((value: string) => {
    if (value.length < 3) {
      return "Updated title should be longer!";
    }
  }, []);

  const validateTask = useCallback((value: string) => {
    if (value.length < 10) {
      return "Updated task text should be longer!";
    }
  }, []);

  return (
    <Styled.Container
      className={`${active ? "flex" : "none"}`}
      onClick={() => setActive(false)}
    >
      <Styled.Window
        onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
      >
        <Formik
          initialValues={{
            ...todo,
          }}
          onSubmit={(values) => {
            editTodo.mutate({ ...values });
          }}
        >
          {({ errors, touched }) => (
            <Styled.ModalForm>
              <Styled.Content>
                <Styled.AddTodoTitle>Edit todo Form</Styled.AddTodoTitle>
                <Styled.FieldTitle>Title</Styled.FieldTitle>
                <Styled.ModalField
                  className={`${
                    errors.title && touched.title ? "red" : "black"
                  }`}
                  name="title"
                  validate={validateTitle}
                />
                <Styled.ErrorMessage
                  className={`${
                    errors.title && touched.title ? "block" : "none"
                  }`}
                >
                  {errors.title}
                </Styled.ErrorMessage>
                <Styled.FieldTitle>Task</Styled.FieldTitle>
                <Styled.TaskField
                  className={`${errors.task && touched.task ? "red" : "black"}`}
                  name="task"
                  validate={validateTask}
                />
                <Styled.ErrorMessage
                  className={`${
                    errors.task && touched.task ? "block" : "none"
                  }`}
                >
                  {errors.task}
                </Styled.ErrorMessage>
                <Styled.Button type="submit">Confirm changes</Styled.Button>
              </Styled.Content>
            </Styled.ModalForm>
          )}
        </Formik>
      </Styled.Window>
    </Styled.Container>
  );
};
