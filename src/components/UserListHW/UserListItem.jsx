import React from 'react';

function UserListItem (props) {
  const {
    user: { id, firstName, lastName, age, imgSrc, isSelected },
    onClickHandler,
  } = props;

  const liStyle = { backgroundColor: 'grey' };
  return (
    <li style={isSelected ? liStyle : null} onClick={onClickHandler}>
      <img src={imgSrc} style={{ borderRadius: '50%', width: '50px' }} />
      ID: "{id} Fullname:"{firstName} {lastName}" Age:"{age}"
    </li>
  );
}

export default UserListItem;
