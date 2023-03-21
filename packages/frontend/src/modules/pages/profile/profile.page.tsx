import React from "react";
import { FormikValues } from "formik";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import * as Styled from "./profile.styled";
import { passwordValidation } from "./validation-profile";
import userService from "../../service/user.service";
import { QUERY_KEYS } from "../../common/consts/app-keys.const";
import { queryClient, queryUser } from "../../common/components/querry-client";
import { EChangePasswordFormValues } from "../../common/types/user.types";
import { Header } from "../../common/components/header";

export const Profile = () => {
  const navigate = useNavigate();
  const user = queryUser.useGetUser();

  const changePassword = queryUser.useChangePassword();

  const logoutHandler = () => {
    userService.logout();
    queryClient.invalidateQueries(QUERY_KEYS.USER);
    navigate("/");
  };

  if (user.isLoading) {
    <Styled.Loading>Loading...</Styled.Loading>;
  }
  return (
    <>
      <Header />
      <Styled.Container
        initialValues={{
          [EChangePasswordFormValues.OLD_PASSWORD]: "",
          [EChangePasswordFormValues.NEW_PASSWORD]: "",
        }}
        validationSchema={passwordValidation}
        onSubmit={(values: FormikValues) => {
          changePassword.mutate(values);
        }}
      >
        {({ errors, touched }) => (
          <Styled.MainForm>
            <Styled.Label>Old password</Styled.Label>
            <Styled.AuthField
              name={EChangePasswordFormValues.OLD_PASSWORD}
              type="password"
            />
            <Styled.Error
              className={`${
                errors[EChangePasswordFormValues.OLD_PASSWORD] &&
                touched[EChangePasswordFormValues.OLD_PASSWORD]
                  ? "block"
                  : "none"
              }`}
            >
              {errors[EChangePasswordFormValues.OLD_PASSWORD]}
            </Styled.Error>
            <Styled.Label>Password</Styled.Label>
            <Styled.AuthField
              name={EChangePasswordFormValues.NEW_PASSWORD}
              type="password"
            />
            <Styled.Error
              className={`${
                errors[EChangePasswordFormValues.NEW_PASSWORD] &&
                touched[EChangePasswordFormValues.NEW_PASSWORD]
                  ? "block"
                  : "none"
              }`}
            >
              {errors[EChangePasswordFormValues.NEW_PASSWORD]}
            </Styled.Error>
            <Styled.Buttons>
              <Styled.ControlButton type="button" onClick={() => navigate(-1)}>
                Back
              </Styled.ControlButton>
              <Styled.ControlButton type="submit">Submit</Styled.ControlButton>
            </Styled.Buttons>
            <Styled.Logout type="button" onClick={logoutHandler}>
              Logout
            </Styled.Logout>
          </Styled.MainForm>
        )}
      </Styled.Container>
      <ToastContainer />
    </>
  );
};
