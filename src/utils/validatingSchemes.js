import * as yup from 'yup';

export const LOGIN_SCHEME = yup.object({
  email: yup
    .string()
    .email('This is not correct email!')
    .required(),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*[!@#$%^&*].*).{8,32}$/,
      'Your password must contain 1 lower case letter, 1 uppercase letter, 1 digit and symbol. Length from 8 to 32.'
    )
    .min(8)
    .max(32)
    .required(),
});
