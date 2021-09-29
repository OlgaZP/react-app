import React from 'react';
import classNames from 'classnames';
import styles from './UserListItem.module.scss';

function UserListItem (props) {
  const {
    user: { id, firstName, lastName, age, imgSrc, isSelected },
    onClickHandler,
    removeUserHandler,
  } = props;

  const liStyle = { backgroundColor: 'grey' };
  const liClassName = classNames(styles.userContainer, { liStyle: isSelected });
  console.log('liClassName :>> ', liClassName);
  return (
    <li style={isSelected ? liStyle : null} onClick={onClickHandler}>
      <img src={imgSrc} style={{ borderRadius: '50%', width: '50px' }} />
      Fullname:"{firstName} {lastName}" Age:"{age}"
      <button on onClick={removeUserHandler}>
        del
      </button>
    </li>
  );
}

export default UserListItem;
