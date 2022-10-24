import React from 'react';
import { CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { ILoginState } from './state';
import { IUser } from '../../type/type.user';

const initialUserState = {
    email : "",
    password : "",
    name : "",
    phone : 0,
    profile_image : "",
    created_at : null,
    updated_at : null,

}

const loginInitialState : ILoginState = {
    userState : initialUserState
}

const loginSlice = createSlice({
    name : 'loginSlice',
    initialState : loginInitialState,
    reducers : {
        setUser: (state : ILoginState, action : any) => {
            state = action.payload
        }
    }
});

export const setUserSelector = (state : any) => state.loginSlice

const {reducer, actions} = loginSlice;

export const {setUser} = actions;

export default reducer;
