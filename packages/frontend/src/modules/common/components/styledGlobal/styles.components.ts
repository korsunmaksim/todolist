import styled from "styled-components";
import {
  SCREEN_WIDTH,
  WEIGHTS,
  SIZES,
  BORDER_RADIUSES,
  BORDER_SIZES,
  PADDINGS,
  COLORS,
} from "../../../theme";

export const Ref = styled("a")`
  font-size: ${SIZES.large};
  font-weight: ${WEIGHTS.normal};
  text-decoration: none;
  color: ${COLORS.black};
  border-radius: ${BORDER_RADIUSES.s};
  border: ${BORDER_SIZES.l} solid black;
  padding: ${PADDINGS.m};
  @media (max-width: ${SCREEN_WIDTH.tablet}) {
    font-size: ${SIZES.normal};
  }
`;

export const Button = styled("button")`
  height: 30px;
  font-size: ${SIZES.large};
  font-weight: ${WEIGHTS.normal};
  border-radius: ${BORDER_RADIUSES.s};
  border: ${BORDER_SIZES.l} solid black;
  cursor: pointer;
  transform: all 2s ease;
  background-color: ${COLORS.main_color};
  @media (max-width: ${SCREEN_WIDTH.tablet}) {
    font-size: ${SIZES.large};
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const Input = styled("input")`
  border: ${BORDER_SIZES.l} solid;
  @media (max-width: ${SCREEN_WIDTH.tablet}) {
  }
`;
