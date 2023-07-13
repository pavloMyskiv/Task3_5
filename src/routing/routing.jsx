import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';
import PostList from '../components/PostList';
import TodoList from '../components/TodoList';
import UserList from '../components/UserList';
import UserPage from '../components/UserPage';

const AppRoutes = {
  PostList: '/user/:id/postList',
  TodoList: '/user/:id/todoList',
  UserList: '/',
  User: '/user/:id',
};

export const routing = createBrowserRouter([
  { path: '/', element: <UserList /> },
  {
    path: '/user',
    element: <Layout />,
    children: [
      { path: AppRoutes.User,
        element: <UserPage />,
        index: true },
      {
        path: AppRoutes.PostList,
        element: <PostList />,
      },
      {
        path: AppRoutes.TodoList,
        element: <TodoList />,
      },
    ],
  },
]);
