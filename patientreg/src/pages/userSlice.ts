// userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface UserState {
  userData: {
    uname: string;
    upass: string;
  } | null;
}

const initialState: UserState = {
  userData: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<{ uname: string; upass: string }>) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
