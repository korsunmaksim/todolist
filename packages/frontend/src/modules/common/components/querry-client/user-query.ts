import { useMutation, useQuery } from "react-query";
import { QUERY_KEYS, QUERY_RESPONSES } from "./../../consts/app-keys.const";
import userService from "../../../service/user.service";
import { FormikValues } from "formik";
import { queryClient } from ".";
import { ToastError, ToastSuccess } from "../toast";
import { AxiosError } from "axios";
import { ICustomErrorResponse } from "../../types/response.types";
import { IUser } from "../../types/user.types";
import { useNavigate } from "react-router-dom";

class QueryUser {
  public useGetUser = () =>
    useQuery({
      queryKey: [QUERY_KEYS.USER],
      queryFn: () => userService.getUser(),
      retry: false,
    });

  public useChangePassword = () =>
    useMutation({
      mutationFn: async (newData: FormikValues) => {
        await userService.changePassword(newData);
      },
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEYS.USER);
        ToastSuccess(QUERY_RESPONSES.CHANGE_PASSWORD_SUCCESS);
      },
      onError: (error: AxiosError<ICustomErrorResponse>) => {
        ToastError(error.response?.data.errorMessage!);
      },
    });

  public useLogin = () =>
    useMutation({
      mutationFn: async (user: IUser) => {
        await userService.login(user);
      },
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEYS.USER);
        const navigate = useNavigate();
        navigate("/");
      },
      onError: (error: AxiosError<ICustomErrorResponse>) => {
        ToastError(error.response?.data.errorMessage!);
      },
    });

  public useRegister = () =>
    useMutation({
      mutationFn: async (user: IUser) => {
        await userService.register(user);
      },
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEYS.USER);
      },
    });
}

const queryUser = new QueryUser();

export { queryUser };
