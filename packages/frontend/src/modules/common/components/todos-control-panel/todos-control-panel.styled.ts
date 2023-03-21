import styled from "styled-components";
import { SCREEN_WIDTH, MARGINS, BORDER_RADIUSES, COLORS } from "../../../theme";
import { Button, Input } from "../styledGlobal";

export const ButtonList = styled("div")`
  width: 90%;
  @media (max-width: ${SCREEN_WIDTH.tablet}) {
    flex-direction: column-reverse;
  }
  margin-left: ${MARGINS.s};
`;

export const ControlButton = styled(Button)`
  background-color: ${(props) =>
    props.className === "active" ? COLORS.primary : COLORS.secondary};
  transform: ${(props) =>
    props.className === "active" ? "scale(1.07)" : "scale(1)}"};
  border-radius: ${BORDER_RADIUSES.noRounded};
`;

export const SearchInput = styled(Input)`
  @media (max-width: ${SCREEN_WIDTH.tablet}) {
    margin-top: ${MARGINS.m};
    margin-bottom: ${MARGINS.s};
    width: 50%;
    height: 20px;
  }
`;
