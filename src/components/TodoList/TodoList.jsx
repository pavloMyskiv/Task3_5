import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './TodoList.css';
import {
  useGetTodosQuery,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from '../../store/AppAPI/todoAPI.js';
import {
  setTodoList,
  updateTodo,
  removeTodo,
  setEditingTodoId,
  setEditingTodoValue,
} from '../../store/slices/todoListSlice';

export const TodoList = () => {
  const selectedUserId = useSelector((state) => state.userList.selectedUserId);
  const localTodoList = useSelector((state) => state.todoList.todoList);
  const editingTodoId = useSelector((state) => state.todoList.editingTodoId);
  const editingTodoValue = useSelector(
    (state) => state.todoList.editingTodoValue
  );

  const dispatch = useDispatch();
  const [editTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const {
    data: todosList = [],
    isLoading,
    error,
    isError,
  } = useGetTodosQuery(selectedUserId);

  useEffect(() => {
    dispatch(setTodoList(todosList));
  }, [isLoading]);

  const handleComplete = (todo) => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    dispatch(updateTodo(updatedTodo));
    editTodo(updatedTodo);
  };
  const handleDelete = (todo) => {
    deleteTodo(todo);
    dispatch(removeTodo(todo));
  };
  const handelEdit = (todo) => {
    dispatch(setEditingTodoId(todo.id));
  };
  const handleChangeTodoValue = (event) => {
    dispatch(setEditingTodoValue(event.target.value));
  };
  const handleEditTodo = (event, todo) => {
    if (event.key === 'Enter') {
      const updatedTodo = { ...todo, title: editingTodoValue };
      dispatch(updateTodo(updatedTodo));
      editTodo(updatedTodo);
      dispatch(setEditingTodoId(null));
    }
  };
  if (isLoading) {
    return (
      <div className="todo_list">
        <h1>Todos</h1>
        <div className="loader"></div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="todo_list">
        <h1>Todos</h1>
        <div className="error">
          <h3>ERROR:{error.status}</h3>
          <p>{JSON.stringify(error.data)}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="todo_list">
      <h1>Todos</h1>
      {localTodoList.map((todo) => (
        <div
          className={todo.completed ? 'todo completed' : 'todo'}
          key={todo.id}
        >
          {editingTodoId == todo.id ? (
            <input
              defaultValue={todo.title}
              onChange={handleChangeTodoValue}
              onKeyDown={(event) => {
                handleEditTodo(event, todo);
              }}
            />
          ) : (
            <h2>{todo.title}</h2>
          )}

          <div className="todo_button">
            <button
              onClick={() => {
                handleComplete(todo);
              }}
            ></button>
            <button
              onClick={() => {
                handelEdit(todo);
              }}
            ></button>
            <button
              onClick={() => {
                handleDelete(todo);
              }}
            ></button>
          </div>
        </div>
      ))}
    </div>
  );
};
