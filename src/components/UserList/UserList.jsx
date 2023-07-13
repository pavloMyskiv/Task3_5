import React from 'react';
import './UserList.css';
import { useGetUsersQuery } from '../../store/AppAPI/userAPI.js';
import { Link } from 'react-router-dom';

export const UserList = () => {
  const {
    data: usersList = [],
    isLoading,
    error,
    isError,
  } = useGetUsersQuery();

  if (isLoading) {
    return (
      <div className="container">
        <div className="user_list">
          <h1>Users</h1>
          <div className="loader"></div>
        </div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="container">
        <div className="user_list">
          <h1>Users</h1>
          <div className="error">
            <h3>ERROR:{error.status}</h3>
            <p>{JSON.stringify(error.data)}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <header>
        <h3>React App</h3>
      </header>
      <div className="user_list">
        <h1>Users</h1>
        {usersList.map((user) => (
          <div key={user.id} className="user">
            <div className="user_info">
              <h2>{user.username}</h2>
              <p>
                <span>Name:</span> {user.name}
              </p>
            </div>
            <Link to={`/user/${user.id}`}>
              <button>Select</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
