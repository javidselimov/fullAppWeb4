import { combineReducers } from "redux";
import {playlistReducers} from './playlist'


const rootReducer = combineReducers({
    list: playlistReducers
})

export default rootReducer