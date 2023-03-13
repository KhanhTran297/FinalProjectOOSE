import { createSlice } from "@reduxjs/toolkit";
const accountStore = createSlice({
  name: "account",
  initialState: {
    account: [],
    token: null,
  },
  reducers: {
    authLogin: () => {},
    authRegister: () => {},
    setToken: (state, action) => {
      return {
        ...state,
        token: action.payload,
      };
    },
    setUser: (state, action) => {
      return {
        ...state,
        account: action.payload,
      };
    },
  },
});
//Action
export const { authLogin, authRegister, setToken, setUser } =
  accountStore.actions;
//Reducer
export default accountStore.reducer;
