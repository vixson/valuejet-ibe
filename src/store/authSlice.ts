import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "./store";
import config from "@/config.json";

interface User {
  email: string;
}

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export const login =
  (email: string, password: string) => (dispatch: AppDispatch) => {
    if (
      email === config.credentials.email &&
      password === config.credentials.password
    ) {
      const tempUser: User = { email };
      // localStorage.setItem("user", JSON.stringify(tempUser));
      dispatch(setUser(tempUser));
    } else {
      throw new Error("Invalid Credentials");
    }
  };

export const logout = () => (dispatch: AppDispatch) => {
  // localStorage.removeItem("user");
  dispatch(setUser(null));
};

export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
