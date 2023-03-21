import styled from "styled-components";
import {
  BORDER_SIZES,
  MARGINS,
  SIZES,
  WEIGHTS,
  SCREEN_WIDTH,
  COLORS,
} from "../../theme";

export const AuthHomePage = styled("div")`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: ${SCREEN_WIDTH.mobile}) {
    height: 50vh;
  }
`;

export const Title = styled("h1")`
  font-size: ${SIZES.very_large};
`;

export const Buttons = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const Button = styled("button")`
  width: 6rem;
  height: 2.5rem;
  font-weight: ${WEIGHTS.normal};
  margin-top: ${MARGINS.xl};
  border: ${BORDER_SIZES.l} solid;
  background-color: ${COLORS.main_color};
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;
