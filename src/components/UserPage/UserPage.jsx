import React from 'react';
import './UserPage.css';
import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '../../store/AppAPI/userAPI';

export const UserPage = () => {
  const { id } = useParams();
  const { data: user = {}, isLoading, error, isError } = useGetUserQuery(id);
  if (isLoading) {
    return (
      <div>
        <div className="loader"></div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="error">
        <h3>ERROR:{error.status}</h3>
        <p>{JSON.stringify(error.data)}</p>
      </div>
    );
  }
  return (
    <div className="user_page">
      <div className="user_img"></div>
      <div className="user_info">
        <h2>{user.username}</h2>
        <p>
          <span>Name:</span> {user.name}
        </p>
      </div>
    </div>
  );
};

