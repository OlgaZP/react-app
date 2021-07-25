import React from 'react';
import {UserContext} from '../../contexts';
import styles from './UserPageSidebar.module.scss';

function UserPageSidebar() {
    return (
        <div>
            <UserContext.Consumer>
            {user => {
                const {firstName, lastName, src} = user;
                return <div className={styles.userPageSidebar}>
                    <div>{firstName}</div>
                    <div>{lastName}</div>
                    <img src={src}/>                    
                </div>    
            }}
            </UserContext.Consumer>
        </div>
    )
}

export default UserPageSidebar;
