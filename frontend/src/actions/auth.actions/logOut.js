import { LOG_OUT } from "../../constants/auth.constants";

export const LogOut = () => async (dispatch) => {
    dispatch({type : LOG_OUT });
};