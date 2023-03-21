import styled from "styled-components";
import { TodoButton } from "../todos-display-desktop/TodosDisplayDesktop.styled";
import {
  SCREEN_WIDTH,
  MARGINS,
  BORDER_RADIUSES,
  WEIGHTS,
  COLORS,
} from "../../../theme";
import { CompleteTodo as CompleteTodoImg } from "../todos-display-desktop/TodosDisplayDesktop.styled";

export const TodoListFormMobile = styled("form")`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  @media (min-width: ${SCREEN_WIDTH.mobile}) {
    display: none;
  }
`;

export const Todo = styled("div")`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: ${MARGINS.s};
`;

export const TodoTitle = styled("h1")`
  word-break: break-all;
`;

export const TodoDescription = styled("h3")`
  word-break: break-all;
  width: 90%;
  margin-left: ${MARGINS.s};
  font-weight: ${WEIGHTS.small};
`;

export const ButtonsPanel = styled("div")`
  width: 90%;
  display: flex;
  justify-self: center;
  justify-content: space-between;
`;

export const TodoButtonMobile = styled(TodoButton)`
  margin-right: ${MARGINS.m};
  border-radius: ${BORDER_RADIUSES.noRounded};
`;

export const DeleteTodo = styled(TodoButton)`
  margin-right: ${MARGINS.noMargin};
`;

export const CompleteTodo = styled(CompleteTodoImg)`
  background-color: ${COLORS.main_color};
`;
