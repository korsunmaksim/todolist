import styled from "styled-components";
import { MARGINS } from "../../../theme";

export const Header = styled("header")`
  width: 90%;
  margin-inline: ${MARGINS.auto};
  margin-top: ${MARGINS.m};
  margin-bottom: ${MARGINS.l};
  display: flex;
  justify-content: space-between;
`;
