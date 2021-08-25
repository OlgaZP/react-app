import React from 'react';
import { Field, ErrorMessage } from 'formik';
import classNames from 'classnames';
import styles from './InputComponent.module.scss';

function InputComponent (props) {
  const { name, ...rest } = props;
  return (
    <div>
      {/* <Field name={name} type={type}/> */}
      <Field name={name}>
        {({ field, form, meta }) => {
          const inputClassNames = classNames(styles.input, {
            [styles.validInput]: !meta.error && meta.touched,
            [styles.invalidInput]: meta.error && meta.touched,
          });
          return <input {...field} {...rest} className={inputClassNames} />;
        }}
      </Field>
      <ErrorMessage name={name} component='div' />
    </div>
  );
}

export default InputComponent;
