import { SET_USER } from "./actionsTypes";

export const setUserAction = (user) => ({
    type: SET_USER,
    payload: user,
})