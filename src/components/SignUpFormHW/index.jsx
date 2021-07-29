import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './SignUpFormHW.module.scss';

export default class SignUpFormHW extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             nameValue: '',
             isNameValid: false,
             passwordValue: '',
             isPasswordValid: false,
             emailValue: '',
             isEmailValid: false,

        }        
    };

    handleNameChange = ({target: { value }}) => {        
        this.setState({ 
            nameValue : value,
            isNameValid: /^\S+$/.test(value),
        });
    };

    handleEmailChange = ({target: { value }}) => {
        console.log('EmailChangeHandler :>> ');
        this.setState({ emailValue : value});
    };

    handlePasswordChange = ({target: { value } }) => {
        this.setState( { passwordValue : value});
    };

    submitHandler = e => {
        e.preventDefault();
    };
    
    render() {
        const { nameValue, 
                emailValue, 
                passwordValue,
                isNameValid, 
                isEmailValid, 
                isPAsswordValid} = this.state;
        const nameClassNames = classNames( styles.formInput, {
            [isNameValid ? styles.valid : styles.invalid] : nameValue,
        });
        return (            
            <form className={styles.formContainer} onSubmit={this.submitHandler}>
                <label className={styles.formLabel}> Sign up...</label>
                <label className={styles.formLabel}> Name
                    <input 
                    type="text" 
                    name="nameValue" 
                    value={nameValue} 
                    placeholder="your_name" 
                    className={nameClassNames}
                    onChange={this.handleNameChange}/>
                </label>
                <label className={styles.formLabel}> Email
                    <input 
                    type="email"
                    name="emailValue" 
                    value={emailValue} 
                    placeholder="your_email@mail.com" 
                    className={styles.formInput}
                    onChange={this.handleEmailChange} />
                </label>
                <label className={styles.formLabel}> Password
                    <input 
                    type="password"
                    name="passwordValue" 
                    value={passwordValue} 
                    placeholder="password" 
                    className={styles.formInput}
                    onChange={this.handlePasswordChange} />
                </label>
                <button type="submit" className={styles.formButton}>SignUp</button>
            </form>            
        )
    }
}
