import React from "react";
import { QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { MainRouter } from "../navigation";
import * as theme from "../theme";
import * as Styled from "./app.styled";
import "../../style.css";
import { queryClient } from "../common/components/querry-client";

const AppContainer = () => (
  <ThemeProvider theme={theme}>
    <Styled.GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <MainRouter />
    </QueryClientProvider>
  </ThemeProvider>
);

export default AppContainer;
