import React from "react";
import * as Styled from "./header.styled";
import { Button } from "../styledGlobal/styles.components";
import { APP_KEYS } from "../../consts";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <Styled.Header>
      <Button
        onClick={() => {
          navigate(`${APP_KEYS.ROUTER_KEYS.HOME}`);
        }}
      >
        Todo list
      </Button>
      <Button
        onClick={() => {
          navigate(`${APP_KEYS.ROUTER_KEYS.PROFILE}`);
        }}
      >
        My profile
      </Button>
    </Styled.Header>
  );
};
