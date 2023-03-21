import styled from "styled-components";
import { SCREEN_WIDTH, MARGINS } from "../../theme";
import { Button } from "../../common/components/styledGlobal/styles.components";

export const TodoListPage = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoadingTitle = styled("h1")`
  display: flex;
  justify-content: center;
`;

export const AddTodoButton = styled(Button)`
  justify-self: start;
  @media (max-width: ${SCREEN_WIDTH.mobile}) {
    margin-top: ${MARGINS.l};
  }
`;
