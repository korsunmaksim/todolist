import React, { useCallback } from "react";
import { Formik } from "formik";
import * as Styled from "./modal.styled";
import { queryTodo } from "../querry-client";
import { IAddModalProps } from "../../types/todo.types";
import { COLORS } from "../../../theme";

export const AddModal = ({ active, setActive }: IAddModalProps) => {
  const addTodo = queryTodo.useAddTodo();

  const validateTitle = useCallback((value: string) => {
    if (value.length < 3) {
      return "Title should be longer!";
    }
  }, []);

  const validateTask = useCallback((value: string) => {
    if (value.length < 10) {
      return "Task text should be longer!";
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
            title: "",
            task: "",
            completed: false,
          }}
          onSubmit={(values) => {
            addTodo.mutate({ ...values });
          }}
        >
          {({ errors, touched }) => (
            <Styled.ModalForm>
              <Styled.Content>
                <Styled.AddTodoTitle>Add todo Form</Styled.AddTodoTitle>
                <Styled.FieldTitle>Title</Styled.FieldTitle>
                <Styled.ModalField
                  className={`${
                    errors.title && touched.title ? COLORS.danger : COLORS.black
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
                  className={`${
                    errors.task && touched.task ? COLORS.danger : COLORS.black
                  }`}
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
                <Styled.Button type="submit">Add todo</Styled.Button>
              </Styled.Content>
            </Styled.ModalForm>
          )}
        </Formik>
      </Styled.Window>
    </Styled.Container>
  );
};
