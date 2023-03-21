import * as yup from 'yup';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;

const passwordErrorMessage =
  'New password must be at least 6 characters long,which includes at least one uppercase letter,lowercase letter and one digit ';

export const passwordValidation = yup.object({
  oldPassword: yup.string().required('Please enter your old password'),
  newPassword: yup
    .string()
    .matches(passwordRegex, passwordErrorMessage)
    .required('Please enter new password')
});
