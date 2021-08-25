import React from 'react';
import { LOGIN_SCHEME } from '../../utils/validatingSchemes';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';

const NAME_SCHEME = yup
  .string()
  .matches(/^[A-Z][a-z]{0,19}$/)
  .required();

const USER_SCHEME = yup.object({
  firstName: NAME_SCHEME,
  lastName: NAME_SCHEME,
  age: yup
    .number()
    .positive()
    .integer()
    .min(18)
    .required(),
});

const testingObject = {
  firstName: 'John',
  lastName: 'Nohlan',
  age: 33,
};
const isValidObj = LOGIN_SCHEME.isValidSync(testingObject);
console.log('isValidObj :>> ', isValidObj);

const validateObject = {
  email: 'test@gmail.com',
  password: '123&#$ASDfffg',
};

const isValid = LOGIN_SCHEME.isValidSync(validateObject);
console.log('isValid :>> ', isValid);

function YupForm () {
  return (
    <Formik
      initialValues={{
        userEmail: '',
        userPassword: '',
      }}
      onSubmit={(values, formikBag) => {
        formikBag.resetForm();
      }}
    >
      {/* ниже используется рендер пропс */}
      {formikProps => {
        return (
          <Form>
            <Field type='email' name='userEmail' />
            <Field type='password' name='userPassword' />
            <button type='submit'>Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default YupForm;
