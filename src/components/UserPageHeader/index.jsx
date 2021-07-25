import React from 'react';
import {UserContext} from '../../contexts';
import styles from './UserPageHeader.module.scss';
import classNames from 'classnames';

function UserPageHeader() {
    return (
        <div>
            <UserContext.Consumer>
            {user => {
                const {firstName, src} = user;
                return <div className={styles.headerContainer}>
                    <span>{firstName}</span>                    
                    <img src={src}/>
                    
                </div>
                    
            }}
            </UserContext.Consumer>
        </div>
    );
}

export default UserPageHeader;

