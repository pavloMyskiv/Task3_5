import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './UserList.css';
import { useGetUsersQuery } from '../../store/AppAPI/userAPI.js';
import { selectUser } from '../../store/slices/userListSlice';

const SelectUserButton = (props) => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(selectUser(props.id))}>Select</button>;
};

export const UserList = () => {
  const selectedUserId = useSelector((state) => state.userList.selectedUserId);
  const {
    data: usersList = [],
    isLoading,
    error,
    isError,
  } = useGetUsersQuery();

  if (isLoading) {
    return (
      <div className="user_list">
        <h1>Users</h1>
        <div className="loader"></div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="user_list">
        <h1>Users</h1>
        <div className="error">
          <h3>ERROR:{error.status}</h3>
          <p>{JSON.stringify(error.data)}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="user_list">
      <h1>Users</h1>
      {usersList.map((user) => (
        <div
          className={user.id == selectedUserId ? 'user selected_user' : 'user'}
          key={user.id}
        >
          <div className="user_info">
            <h2>{user.username}</h2>
            <p>
              <span>Name:</span> {user.name}
            </p>
          </div>
          <SelectUserButton id={user.id} />
        </div>
      ))}
    </div>
  );
};
