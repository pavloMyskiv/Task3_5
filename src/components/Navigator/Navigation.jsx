import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './Navigation.css';

export const Navigation = () => {
  const { id } = useParams();
  return (
    <nav>
      <h3>React App</h3>
      <ul>
        <li>
          <NavLink to={`/user/${id}/todoList`}>Todos</NavLink>
        </li>
        <li>
          <NavLink to={`/user/${id}/postlist`}>Posts</NavLink>
        </li>
        <li>
          <NavLink to={`/user/${id}`}>User</NavLink>
        </li>
        <li>
          <NavLink to={`/`}>Lock out</NavLink>
        </li>
      </ul>
    </nav>
  );
};
