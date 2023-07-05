import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userList: [],
  selectedUserId: null,
};

const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    selectUser: (state, action) => {
      state.selectedUserId = action.payload;
    },
  },
});
export const { selectUser } = userListSlice.actions;
export default userListSlice.reducer;
