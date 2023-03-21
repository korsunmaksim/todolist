import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { validation } from "./validation-schema.component";
import {
  EAuthFormValues,
  EFormType,
  IAuthFormProps,
  UserAuth,
} from "../../types/user.types";
import * as Styled from "./auth-styled";

export const AuthForm = ({ formType, onSubmit }: IAuthFormProps) => {
  const navigate = useNavigate();
  const formik = useFormik<UserAuth>({
    initialValues: new UserAuth(),
    validationSchema: validation[formType],
    onSubmit,
  });
  return (
    <Styled.Container>
      <Styled.MainForm onSubmit={formik.handleSubmit}>
        <Styled.Label>Email</Styled.Label>
        <Styled.AuthField
          id={EAuthFormValues.EMAIL}
          name={EAuthFormValues.EMAIL}
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <Styled.Error
          className={`${
            formik.errors.email && formik.touched.email ? "block" : "none"
          }`}
        >
          {formik.errors.email}
        </Styled.Error>
        <Styled.Label>Password</Styled.Label>
        <Styled.AuthField
          id={EAuthFormValues.PASSWORD}
          name={EAuthFormValues.PASSWORD}
          type="password"
          onChange={formik.handleChange}
        />
        <Styled.Error
          className={`${
            formik.errors.password && formik.touched.password ? "block" : "none"
          }`}
        >
          {formik.errors.password}
        </Styled.Error>
        {formType === EFormType.REGISTER && (
          <>
            <Styled.Label>Confirm password</Styled.Label>
            <Styled.AuthField
              id={EAuthFormValues.CONFIRM_PASSWORD}
              name={EAuthFormValues.CONFIRM_PASSWORD}
              type="password"
              onChange={formik.handleChange}
            />
            <Styled.Error
              className={`${
                formik.errors.confirmPassword && formik.touched.confirmPassword
                  ? "block"
                  : "none"
              }`}
            >
              {formik.errors.confirmPassword}
            </Styled.Error>
          </>
        )}
        <Styled.Buttons>
          <Styled.ControlButton type="button" onClick={() => navigate(-1)}>
            Back
          </Styled.ControlButton>
          <Styled.ControlButton type="submit">Submit</Styled.ControlButton>
        </Styled.Buttons>
      </Styled.MainForm>
    </Styled.Container>
  );
};
