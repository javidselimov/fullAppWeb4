import { ActionTypes } from "../actiontypes"

import axios from 'axios'
export const getList = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: ActionTypes.LIST_LOAD,
                
            })
            const { data } = await axios.get("http://localhost:4000/playlist");

            dispatch({
                type: ActionTypes.LIST_SUCCESS,
                payload:data
            })

        } catch (error) {
            dispatch({
                type: ActionTypes.LIST_ERROR,
                payload:error.message
            })
        }
    }
}