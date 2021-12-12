import {combineReducers, createStore} from "redux";
import {dialogReducer} from "./dialogReducer";
import {profileReducer} from "./profileReducer";
import usersReducers from "./usersReducers";

const reducers = combineReducers({
    profileState: profileReducer,
    dialogsState: dialogReducer,
    usersState  : usersReducers
})

const store = createStore(reducers);

export default store;