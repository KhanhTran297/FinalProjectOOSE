import { createSlice } from "@reduxjs/toolkit";
const accountStore = createSlice({
  name: "account",
  initialState: {
    account: [],
    token: null,
    pass: null,
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
    setPass: (state, action) => {
      return {
        ...state,
        pass: action.payload,
      };
    },
  },
});
//Action
export const { authLogin, authRegister, setToken, setUser, setPass } =
  accountStore.actions;
//Reducer
export default accountStore.reducer;
