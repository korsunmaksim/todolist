import styled from "styled-components";
import {
  SCREEN_WIDTH,
  WEIGHTS,
  COLORS,
  MARGINS,
  BORDER_RADIUSES,
  BORDER_SIZES,
  PADDINGS,
} from "../../../theme";

export const TodoListFormDesktop = styled("div")`
  color: ${COLORS.black};
  background-color: ${COLORS.white};
  width: 85%;
  min-height: 70vh;
  margin: ${MARGINS.m};
  display: flex;
  flex-direction: column;
  border-radius: ${BORDER_RADIUSES.s};
  border: ${BORDER_SIZES.xl} solid black;
  @media (max-width: ${SCREEN_WIDTH.mobile}) {
    display: none;
  }
`;

export const Categories = styled("form")`
  width: 100%;
  display: flex;
  font-weight: ${WEIGHTS.bold};
  background-color: ${COLORS.atributeName};
`;

export const Category = styled("h4")`
  margin: ${MARGINS.noMargin};
  border-right: ${BORDER_SIZES.xl} solid;
  width: ${(props) => props.className};
`;

export const TodoAtribute = styled(Category)`
  word-break: break-all;
  font-weight: ${WEIGHTS.normal};
  min-height: 3rem;
  border-right: ${BORDER_SIZES.xl} solid;
  display: flex;
  align-items: center;
`;

export const ActionsAtribute = styled(TodoAtribute)`
  justify-content: space-evenly;
`;

export const AddTodo = styled("div")`
  width: 85%;
  display: flex;
  justify-content: start;
  margin-top: ${MARGINS.m};
`;

export const TodoButton = styled("button")`
  font-weight: ${WEIGHTS.semi_bold};
  cursor: pointer;
  padding: ${PADDINGS.l};
  transition: all 0.5s ease;
  background-color: ${COLORS.main_color};
  border-radius: ${BORDER_RADIUSES.s};
  border: ${BORDER_SIZES.l} solid black;
  &:hover {
    background-color: ${COLORS.secondary};
    transform: scale(1.05);
  }
`;

export const CompleteTodo = styled("img")`
  border-radius: 15px;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.secondary};
    transform: scale(1.05);
  }
`;

export const DeleteTodo = styled(TodoButton)``;

export const TodoAtributes = styled(Categories)`
  background-color: ${(props) => props.color};
`;

export const Block = styled("div")`
  flex-grow: 3;
  display: flex;
`;

export const StraightLine = styled("div")`
  width: ${(props) => props.className};
  border-right: ${BORDER_SIZES.xl} solid black;
`;
