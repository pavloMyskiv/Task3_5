import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (userId) => `users/${userId}/posts`,
    }),
  }),
});

export const { useGetPostsQuery } = postAPI;
