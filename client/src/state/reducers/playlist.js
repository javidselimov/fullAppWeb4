import { ActionTypes } from "../actiontypes"

const initialState = {
    loading: false,
    list: null,
    error:null
}

export const playlistReducers = (state=initialState,action) => {
    switch (action.type) {

        case ActionTypes.LIST_LOAD:
            return {
                ...state,loading:true
            }
        case ActionTypes.LIST_SUCCESS:
            return {
                ...state,loading:false,list:action.payload
            }
        case ActionTypes.LIST_ERROR:
            return {
                ...state,loading:false,error:action.payload
            }

        default: return state
    }
}

