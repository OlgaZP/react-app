import React from 'react';
import {UserContext} from '../../contexts';
import { withUser } from '../HOCs';
import styles from './UserPageHeader.module.scss';
import classNames from 'classnames';

function UserPageHeader(props) {
    const {user} = props;
    return (
        <div className={styles.headerContainer}>
            <span>{user.firstName}</span>                    
            <img src={user.src}/>                    
        </div> 
    );           
}

export default withUser(UserPageHeader);

