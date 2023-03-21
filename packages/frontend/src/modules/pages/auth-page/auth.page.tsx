import React from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./auth.styled";
import { ROUTER_KEYS } from "../../common/consts/app-keys.const";

export const AuthPage = () => {
  const navigate = useNavigate();
  return (
    <Styled.AuthHomePage>
      <Styled.Title>Todo list</Styled.Title>
      <Styled.Buttons>
        <Styled.Button onClick={() => navigate(ROUTER_KEYS.LOGIN)}>
          Login
        </Styled.Button>
        <Styled.Button onClick={() => navigate(ROUTER_KEYS.REGISTER)}>
          Register
        </Styled.Button>
      </Styled.Buttons>
    </Styled.AuthHomePage>
  );
};
