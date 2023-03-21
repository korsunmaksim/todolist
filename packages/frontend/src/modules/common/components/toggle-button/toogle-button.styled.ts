import styled from "styled-components";
import {
  BORDER_RADIUSES,
  BORDER_SIZES,
  COLORS,
  PADDINGS,
} from "../../../theme";

export const Container = styled("button")`
  width: 40px;
  height: 25px;
  border: ${BORDER_SIZES.m} solid;
  border-radius: ${BORDER_RADIUSES.xxl};
  cursor: pointer;
  display: ${(props) => props.className};
  align-items: center;
  background-color: ${(props) => props.color};
  padding: ${PADDINGS.noPadding};
`;

export const Circle = styled("div")`
  border: ${BORDER_SIZES.m} solid;
  width: 15px;
  margin-left: ${(props) => props.className};
  height: 20px;
  border-radius: ${BORDER_RADIUSES.full};
  background-color: ${COLORS.white};
`;
