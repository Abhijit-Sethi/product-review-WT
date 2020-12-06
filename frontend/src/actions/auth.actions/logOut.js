import { LOG_OUT } from "../../constants/auth.constants";

export const logOut = () => async (dispatch) => {
    dispatch({type : LOG_OUT });
};