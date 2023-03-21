import React from "react";
import * as Styled from "./todos-control-panel.styled";

interface ITodosControlPanelProps {
  status: boolean;
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TodosControlPanel = ({
  status,
  setStatus,
}: ITodosControlPanelProps) => (
  <Styled.ButtonList>
    <div>
      <Styled.ControlButton
        className={`${!status ? "active" : ""}`}
        type="button"
        onClick={() => setStatus(false)}
      >
        Active
      </Styled.ControlButton>
      <Styled.ControlButton
        className={`${status ? "active" : ""}`}
        type="button"
        onClick={() => setStatus(true)}
      >
        Completed
      </Styled.ControlButton>
    </div>
  </Styled.ButtonList>
);
