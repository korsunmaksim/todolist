import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { AuthLogin } from "../pages/login-page";
import { AuthRegister } from "../pages/register-page";
import { queryUser } from "../common/components/querry-client";
import { APP_KEYS } from "../common/consts";
import { AuthPage } from "../pages/auth-page";
import { Profile } from "../pages/profile";
import { TodoListContainer } from "../pages/todo-list-page";
import { LoadingTitle } from "../pages/todo-list-page/todo_list.styled";
import { TodoPage } from "../pages/todo-page/todo_page";

export const MainRouter = () => {
  const checkAuth = queryUser.useGetUser();

  if (checkAuth.isLoading) {
    return <LoadingTitle>Loading...</LoadingTitle>;
  }
  return (
    <Router>
      {checkAuth.isSuccess ? (
        <Routes>
          <Route
            element={<TodoListContainer />}
            path={APP_KEYS.ROUTER_KEYS.HOME}
          />
          <Route element={<TodoPage />} path={APP_KEYS.ROUTER_KEYS.TODO} />
          <Route element={<Profile />} path={APP_KEYS.ROUTER_KEYS.PROFILE} />
          <Route
            path="*"
            element={<Navigate to={APP_KEYS.ROUTER_KEYS.HOME} replace />}
          />
        </Routes>
      ) : (
        <Routes>
          <Route element={<AuthPage />} path={APP_KEYS.ROUTER_KEYS.HOME} />
          <Route element={<AuthLogin />} path={APP_KEYS.ROUTER_KEYS.LOGIN} />
          <Route
            element={<AuthRegister />}
            path={APP_KEYS.ROUTER_KEYS.REGISTER}
          />
          <Route
            path="*"
            element={<Navigate to={APP_KEYS.ROUTER_KEYS.HOME} replace />}
          />
        </Routes>
      )}
    </Router>
  );
};
