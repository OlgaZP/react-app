import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './SignUpFormHW.module.scss';

export default class SignUpFormHW extends Component {
  constructor (props) {
    super(props);

    this.state = {
      nameValue: '',
      isNameValid: false,
      passwordValue: '',
      isPasswordValid: false,
      emailValue: '',
      isEmailValid: false,
    };
  }

  handleNameChange = ({ target: { value } }) => {
    this.setState({
      nameValue: value,
      isNameValid: /^[A-Za-z]\w{0,19}$/.test(value),
    });
  };

  handleEmailChange = ({ target: { value } }) => {
    this.setState({
      emailValue: value,
      isEmailValid: /^(\w\.?)+@[\w\.]+\.\w{2,}$/.test(value),
    });
  };

  handlePasswordChange = ({ target: { value } }) => {
    this.setState({
      passwordValue: value,
      //регулярное выражение взято из интернета и подправлено,
      // предполагает обязательное наличие
      //1 большой, 1 маленькой латинской буквы и цифры, в любом месте
      isPasswordValid: /(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)[A-Za-z\d]{8,12}/.test(
        value
      ),
    });
  };

  //обработчик всей формы
  submitHandler = e => {
    e.preventDefault();
  };

  render () {
    const {
      nameValue,
      emailValue,
      passwordValue,
      isNameValid,
      isEmailValid,
      isPasswordValid,
    } = this.state;
    const nameClassNames = classNames(styles.formInput, {
      [isNameValid ? styles.valid : styles.invalid]: nameValue,
    });
    const emailClassNames = classNames(styles.formInput, {
      [isEmailValid ? styles.valid : styles.invalid]: emailValue,
    });
    const passwordClassNames = classNames(styles.formInput, {
      [isPasswordValid ? styles.valid : styles.invalid]: passwordValue,
    });

    return (
      <form className={styles.formContainer} onSubmit={this.submitHandler}>
        <label className={styles.formLabel}> Sign up...</label>
        <label className={styles.formLabel}>
          {' '}
          Name
          <input
            type='text'
            name='nameValue'
            value={nameValue}
            placeholder='your_name'
            className={nameClassNames}
            onChange={this.handleNameChange}
          />
        </label>
        <label className={styles.formLabel}>
          {' '}
          Email
          <input
            type='email'
            name='emailValue'
            value={emailValue}
            placeholder='your_email@mail.com'
            className={emailClassNames}
            onChange={this.handleEmailChange}
          />
        </label>
        <label className={styles.formLabel}>
          {' '}
          Password
          <input
            type='password'
            name='passwordValue'
            value={passwordValue}
            placeholder='password'
            title='8-12 symbols: 1 upper case letter, 1 lower case and 1 digin required'
            className={passwordClassNames}
            onChange={this.handlePasswordChange}
          />
        </label>
        <label className={styles.formLabel}>
          <button type='submit' className={styles.formButton}>
            SignUp
          </button>
        </label>
      </form>
    );
  }
}
