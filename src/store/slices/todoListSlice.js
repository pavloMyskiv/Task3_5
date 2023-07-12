import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoList: [],
};

const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: { EmptyReducer: (state) => state },
});
export const { setEditingTodoId } = todoListSlice.actions;
export default todoListSlice.reducer;
