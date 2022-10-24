import { combineReducers } from '@reduxjs/toolkit'
import loginReducer from '../containers/LoginPage/reducer';

const rootReducer = combineReducers({
    loginReducer : loginReducer
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;