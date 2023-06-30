import React from 'react';
import { useSelector } from 'react-redux';
import './PostList.css';
import { useGetPostsQuery } from '../../store/AppAPI/postAPI.js';

export const PostList = () => {
  const selectedUserId = useSelector((state) => state.userList.selectedUserId);
  const {
    data: postsList = [],
    isLoading,
    error,
    isError,
  } = useGetPostsQuery(selectedUserId);
  if (isLoading) {
    return (
      <div className="user_list">
        <h1>Posts</h1>
        <div className="loader"></div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="user_list">
        <h1>Posts</h1>
        <div className="error">
          <h3>ERROR:{error.status}</h3>
          <p>{JSON.stringify(error.data)}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="post_list">
      <h1>Posts</h1>
      {postsList.map((post) => (
        <div className="post" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};
