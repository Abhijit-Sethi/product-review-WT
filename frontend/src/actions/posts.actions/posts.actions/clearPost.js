import axios from 'axios';
import { CLEAR_POST, POST_ERROR } from "../../../constants/post.constants";

export const clearPost = () => async (dispatch) => {
  try {
    dispatch({ type: CLEAR_POST });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: error,
    });
  }
};