import React from "react";
import { FormikValues } from "formik";
import { queryUser } from "../../common/components/querry-client";
import { AuthForm } from "../../common/components/auth-form/auth-form.component";
import { EFormType } from "../../common/types/user.types";

export const AuthRegister = () => {
  const register = queryUser.useRegister();
  const onSubmit = (values: FormikValues) => {
    const { email, password } = values;
    register.mutate({ email, password });
  };
  return <AuthForm formType={EFormType.REGISTER} onSubmit={onSubmit} />;
};
