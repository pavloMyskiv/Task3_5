import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoList: [],
  editingTodoId: null,
  editingTodoValue: '',
};

const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    setTodoList: (state, action) => {
      state.todoList = action.payload;
    },
    updateTodo: (state, action) => {
      state.todoList = state.todoList.map((todo) => {
        if (todo.id == action.payload.id) {
          return action.payload;
        }
        return todo;
      });
    },
    removeTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload.id
      );
    },
    setEditingTodoId: (state, action) => {
      state.editingTodoId = action.payload;
    },
    setEditingTodoValue: (state, action) => {
      state.editingTodoValue = action.payload;
    },
  },
});
export const { setTodoList, updateTodo, removeTodo, setEditingTodoId, setEditingTodoValue } =
  todoListSlice.actions;
export default todoListSlice.reducer;
