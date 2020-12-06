import { combineReducers } from "redux";
import users from "./users.reducers";
import posts from "./posts.reducers";
import auth from "./auth.reducers";

export default combineReducers({
  users,
  posts,
  auth,
});