import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import { AppRoutes } from '../../routing/routing';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={AppRoutes.UserList}>Users</NavLink>
        </li>
        <li>
          <NavLink to={AppRoutes.PostList}>Posts</NavLink>
        </li>
        <li>
          <NavLink to={AppRoutes.TodoList}>Todos</NavLink>
        </li>
      </ul>
    </nav>
  );
};
