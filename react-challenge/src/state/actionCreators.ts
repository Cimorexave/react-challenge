import { Dispatch } from "redux"

export const getUserInfo = (data: object) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: "get",
            payload: data
        })
    }
}