import { createStore } from "redux";
import { authReducer } from "../components/Auth/store/reducer";
 
export const store = createStore(authReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

window.store = store