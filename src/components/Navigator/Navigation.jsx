import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './Navigation.css';
import { AppRoutes } from '../../routing/routing';

export const Navigation = () => {
  const { id } = useParams();
  return (
    <nav>
      <h3>React App</h3>
      <ul>
        <li>
          <NavLink to={`${AppRoutes.User}/${id}/${AppRoutes.TodoList}`}>
            Todos
          </NavLink>
        </li>
        <li>
          <NavLink to={`${AppRoutes.User}/${id}/${AppRoutes.PostList}`}>
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink to={`${AppRoutes.User}/${id}`}>User</NavLink>
        </li>
        <li>
          <NavLink to={AppRoutes.UserList}>Lock out</NavLink>
        </li>
      </ul>
    </nav>
  );
};
