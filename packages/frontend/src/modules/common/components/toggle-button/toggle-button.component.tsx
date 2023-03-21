import React, { useState } from "react";
import { COLORS } from "../../../theme";
import { ITodo } from "../../types/todo.types";
import * as Styled from "./toogle-button.styled";

interface IToggleProps {
  startValue: boolean;
  onClickExtraFunc: (todo: ITodo) => void;
  todo: ITodo;
  isLoading: boolean;
}

export const ToggleButton = ({
  todo,
  startValue,
  onClickExtraFunc,
  isLoading,
}: IToggleProps) => {
  const [toggle, setToggle] = useState<Boolean>(startValue);
  const onClickHandler = () => {
    setToggle((prev) => !prev);
    onClickExtraFunc(todo);
  };
  return (
    <Styled.Container
      disabled={isLoading}
      color={`${toggle ? COLORS.green : COLORS.white}`}
      onClick={onClickHandler}
    >
      <Styled.Circle className={`${toggle ? "18px" : "0px"}`} />
    </Styled.Container>
  );
};
