import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faHeart } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind';
import styles from './UserListItem.module.scss';

function UserListItem (props) {
  const {
    user: { id, firstName, lastName, age, imgSrc, isSelected, likesCount },
    onClickHandler,
    removeUserHandler,
    addUserLikesHandler,
  } = props;
  
  const cs = classNames.bind(styles);

  const liClassName = cs({
      userContainer: true, 
      userSelected: isSelected
  });  

  return (
    <li className={liClassName}>
      <div className={styles.userInfoContainer} onClick={onClickHandler}>
        <img src={imgSrc} className={styles.userImage} />
        <div className={styles.userInfo}>
          <p style={{ fontWeight: 'bold'}}> {firstName} {lastName}</p>
          <p style={{ fontSize: 'small'}}>  Age: {age} </p>
        </div>
      </div>   
      <FontAwesomeIcon icon={faHeart} onClick={addUserLikesHandler}/>
      <p style={{width: '2em', textAlign: 'center'}}>{likesCount}</p>
      <FontAwesomeIcon icon={faTrashAlt} onClick={removeUserHandler}/>
      
    </li>
    
  );
}

export default UserListItem;
