import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';
import PostList from '../components/PostList';
import TodoList from '../components/TodoList';
import UserList from '../components/UserList';

export const AppRoutes = {
  PostList: '/postList',
  TodoList: '/todoList',
  UserList: '/',
};

export const routing = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { element: <UserList />, index: true },
      { path: AppRoutes.PostList, element: <PostList /> },
      { path: AppRoutes.TodoList, element: <TodoList /> },
    ],
  },
]);
