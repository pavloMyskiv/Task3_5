import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoAPI = createApi({
  reducerPath: 'todoAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (userId) => `users/${userId}/todos`,
    }),
    updateTodo: builder.mutation({
      query: (updatedTodo) => ({
        query: `/todos/${updatedTodo.id}`,
        method: 'PUT',
        body: updatedTodo,
      }),
    }),
    deleteTodo: builder.mutation({
      query: (todo) => ({
        query: `/todos/${todo.id}`,
        mathod: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetTodosQuery,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todoAPI;
