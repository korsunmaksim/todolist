import { Formik, Form, Field } from "formik";
import styled from "styled-components";
import { Button } from "../../common/components/styledGlobal";
import { BORDER_SIZES, COLORS, MARGINS, SCREEN_WIDTH } from "../../theme";
import { LoadingTitle } from "../todo-list-page/todo_list.styled";

export const Container = styled(Formik)`
  width: 100%;
  margin-inline: ${MARGINS.auto};
  height: 80vh;
  display: flex;
  align-items: center;
`;

export const MainForm = styled(Form)`
  width: 30%;
  height: 90vh;
  display: flex;
  margin-inline: ${MARGINS.auto};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (width<${SCREEN_WIDTH.tablet}) and (width>${SCREEN_WIDTH.mobile}) {
    width: 60%;
  }
  @media (width<${SCREEN_WIDTH.mobile}) {
    width: 90%;
  }
`;

export const Label = styled("label")`
  width: 100%;
`;

export const AuthField = styled(Field)`
  border: ${BORDER_SIZES.l} solid;
  width: 100%;
`;

export const Buttons = styled("div")`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: ${MARGINS.xl};
`;

export const ControlButton = styled(Button)`
  width: 5rem;
`;

export const Error = styled("h6")`
  margin: ${MARGINS.noMargin};
  display: ${(props) => props.className};
  color: ${COLORS.danger};
  width: 100%;
  justify-self: start;
`;

export const Logout = styled(ControlButton)`
  margin-top: ${MARGINS.xxl};
`;

export const Loading = styled(LoadingTitle)``;
