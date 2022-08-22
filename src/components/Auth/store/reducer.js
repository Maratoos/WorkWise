import { SET_USER } from "./actionsTypes"

const initialState = {
    user: null
}

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER: {
            return { ...state, user: action.payload }
        }
        default: 
            return state
    }
}              