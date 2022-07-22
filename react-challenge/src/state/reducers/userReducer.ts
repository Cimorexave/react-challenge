import { AcUnitOutlined } from "@mui/icons-material"
interface actionInterface {
    type: string,
    payload: {}
}
const reducer = (state = {}, action: actionInterface) => {
    if (action.type === "update") {
        return {...state, action.payload}
    }
    else {
        return state
    }
}


export default reducer