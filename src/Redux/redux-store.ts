import {combineReducers, createStore} from "redux";
import {dialogReducer} from "../../src/Redux/dialog-reducer";
import {profileReducer} from "../../src/Redux/profile-reducer";
import {sidebarReducer} from "../../src/Redux/sidebar-reducer";
import { usersReducer } from "../../src/Redux/users-reducer";



let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})


export type AppStateType = ReturnType<typeof rootReducer>


export const store = createStore(rootReducer)
