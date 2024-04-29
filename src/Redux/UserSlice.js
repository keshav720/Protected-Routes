import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user:null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
