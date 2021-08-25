import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './LoginForm.module.scss';

class LoginForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      loginValue: '',
      isLoginValid: false,
      passValue: '',
    };
  }

  handleLoginChange = ({ target: { value } }) => {
    this.setState({
      loginValue: value,
      isLoginValid: /^\S+$/.test(value),
    });
  };

  handlePasswordChange = ({ target: { value } }) => {
    this.setState({ passValue: value });
  };
  //через вычисляемые свойства уменьшаем количество обработчиков
  //вместо двух пишем один универсальный
  // handleChange = ({target: { value, name}}) => {
  //     this.setState( { [name] : value});
  // };

  submitHandler = e => {
    e.preventDefault();
  };

  render () {
    const { loginValue, passValue, isLoginValid } = this.state;
    // const loginClassName = classNames(styles.input, {
    //     [styles.valid]: isLoginValid,
    //     [styles.invalid]: !isLoginValid,
    //  });
    const loginClassName = classNames(styles.input, {
      [isLoginValid ? styles.valid : styles.invalid]: loginValue,
    });
    return (
      <form className={styles.container} onSubmit={this.submitHandler}>
        <label className={styles.inputLabel}>
          {' '}
          Login
          <input
            className={loginClassName}
            type='text'
            placeholder='login'
            name='loginValue'
            value={loginValue}
            onChange={this.handleLoginChange}
          />
        </label>
        <label className={styles.inputLabel}>
          Password
          <input
            className={styles.input}
            type='password'
            name='passValue'
            placeholder='password'
            value={passValue}
            onChange={this.handlePasswordChange}
          />
        </label>
        <button type='submit'>Login</button>
      </form>
    );
  }
}

export default LoginForm;
