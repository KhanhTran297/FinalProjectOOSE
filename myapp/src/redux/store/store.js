import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "../slice/account";
import postReducer from "../slice/post";
import commentReducer from "../slice/comment"
const store = configureStore({
  reducer: {
    account: accountReducer,
    post: postReducer,
    comment: commentReducer,
  },
});
export default store;
