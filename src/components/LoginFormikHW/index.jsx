import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { LOGIN_SCHEME } from '../../utils/validatingSchemes';
import InputComponent from './InputComponent';

export default function LoginFormikHW () {
  //начала писала по записи занятия, а потом добавила необходимое
  const loginFormInitialValues = {
    email: '',
    password: '',
  };

  const loginFormHandleSubmit = (values, formikBag) => {
    console.dir(values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={loginFormInitialValues}
      onSubmit={loginFormHandleSubmit}
      validationSchema={LOGIN_SCHEME}
    >
      {formikProps => {
        return (
          <Form>
            <InputComponent
              type='text'
              name='email'
              placeholder='your_mail@email.com'
              autofocus
            />
            <InputComponent type='password' name='password' />
            <button type='submit'>Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}
