import reducer from './reducers/userReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    user: reducer
})

export default reducers