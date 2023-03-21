import styled from "styled-components";
import { Button } from "../styledGlobal";
import { SCREEN_WIDTH, MARGINS, COLORS } from "../../../theme";
import { CompleteTodo as CompleteTodoImg } from "../todos-display-desktop/TodosDisplayDesktop.styled";

export const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled("h1")`
  width: 81%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${SCREEN_WIDTH.mobile}) {
    width: 90%;
  }
`;

export const DescriptionTitle = styled("h4")`
  width: 80%;
  margin-right: ${MARGINS.m};
`;

export const Description = styled("h4")`
  width: 78%;
  word-break: break-all;
  margin-bottom: ${MARGINS.xxxl};
  @media (max-width: ${SCREEN_WIDTH.mobile}) {
    width: 84%;
  }
`;

export const Complete = styled("div")`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${SCREEN_WIDTH.mobile}) {
    width: 80%;
  }
`;

export const Private = styled(Complete)``;

export const Buttons = styled("div")`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  color: black;
  margin-top: ${MARGINS.xxxl};
  width: 80%;
  cursor: pointer;
  margin-left: ${MARGINS.m};
`;

export const BackButton = styled(Button)`
  width: 30%;
`;

export const UpdateButton = styled(BackButton)``;

export const CompleteTodo = styled(CompleteTodoImg)`
  background-color: ${COLORS.main_color};
  width: 2rem;
  height: 2rem;
`;
