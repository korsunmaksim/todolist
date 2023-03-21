import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { queryUser } from "../../common/components/querry-client";
import { AuthForm } from "../../common/components/auth-form/auth-form.component";
import { EFormType, UserAuth } from "../../common/types/user.types";

export const AuthLogin = () => {
  const login = queryUser.useLogin();
  const onSubmit = (values: UserAuth) => {
    const { email, password } = values;
    login.mutate({ email, password });
  };
  return (
    <div>
      <AuthForm formType={EFormType.LOGIN} onSubmit={onSubmit} />
      <ToastContainer />
    </div>
  );
};
