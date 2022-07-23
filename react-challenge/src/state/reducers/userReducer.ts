interface actionInterface {
    type: string,
    payload?: any
}
const reducer = (state = {}, action: actionInterface) => {
    if (action.type === "get") {
        return {...state}
    }
    else {
        return state
    }
}


export default reducer