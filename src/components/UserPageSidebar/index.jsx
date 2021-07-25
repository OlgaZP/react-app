import React from 'react';
import { withUser } from '../HOCs';
import {UserContext} from '../../contexts';
import styles from './UserPageSidebar.module.scss';

function UserPageSidebar(props) {
    const { user : {firstName, lastName, src}} = props;
    return (
        <div className={styles.userPageSidebar}>
             <div>{firstName}</div>
             <div>{lastName}</div>
             <img src={src}/>                    
        </div>    
    );       
}

export default withUser(UserPageSidebar);
