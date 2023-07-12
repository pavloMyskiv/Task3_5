import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';
import PostList from '../components/PostList';
import TodoList from '../components/TodoList';
import UserList from '../components/UserList';
import UserPage from '../components/UserPage';

export const AppRoutes = {
  PostList: 'postList',
  TodoList: 'todoList',
  UserList: '/',
  User: '/user',
};

export const routing = createBrowserRouter([
  { path: '/', element: <UserList /> },
  {
    path: '/user',
    element: <Layout />,
    children: [
      { path: `${AppRoutes.User}/:id`, element: <UserPage /> },
      {
        path: `${AppRoutes.User}/:id/${AppRoutes.PostList}`,
        element: <PostList />,
      },
      {
        path: `${AppRoutes.User}/:id/${AppRoutes.TodoList}`,
        element: <TodoList />,
      },
    ],
  },
]);
