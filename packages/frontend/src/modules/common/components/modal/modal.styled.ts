import styled from "styled-components";
import { Form, Field } from "formik";
import {
  SCREEN_WIDTH,
  COLORS,
  MARGINS,
  BORDER_RADIUSES,
  WEIGHTS,
} from "../../../theme";
import { TodoButton } from "../todos-display-desktop/TodosDisplayDesktop.styled";

export const Container = styled("div")`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: ${COLORS.shadow};
  top: 0;
  display: ${(props) => props.className};
  align-items: center;
  justify-content: center;
  right: 0;
`;

export const Window = styled("div")`
  width: 60vw;
  height: 90vh;
  color: ${COLORS.white};
  background-color: ${COLORS.main_color};
  color: ${COLORS.black};
  border-radius: ${BORDER_RADIUSES.xl};
  @media (max-width: ${SCREEN_WIDTH.mobile}) {
    width: 80vw;
    height: 75vh;
  }
`;

export const AddTodoTitle = styled("h1")`
  text-align: center;
`;

export const ModalForm = styled(Form)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Content = styled("div")`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const ModalField = styled(Field)`
  margin-bottom: ${MARGINS.s};
  border-color: ${(props) => props.className};
`;

export const FieldTitle = styled("label")`
  font-weight: ${WEIGHTS.semi_bold};
`;

export const TaskField = styled(ModalField)`
  height: 40vh;
`;

export const Button = styled(TodoButton)`
  font-weight: ${WEIGHTS.semi_bold};
  background-color: ${COLORS.main_color};
  margin-top: ${MARGINS.xxl};
  border-radius: ${BORDER_RADIUSES.s};
  width: 20%;
  align-self: center;
  @media (max-width: ${SCREEN_WIDTH.mobile}) {
    width: 40vw;
  }
`;

export const ErrorMessage = styled("h6")`
  margin: ${MARGINS.noMargin};
  margin-top: ${MARGINS.xs};
  color: ${COLORS.danger};
  display: ${(props) => props.className};
`;
