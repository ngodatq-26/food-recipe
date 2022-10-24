import React, { lazy } from 'react';
import LoginPage from '../containers/LoginPage';
import {useRoutes} from 'react-router-dom'
import PublicRoute from '../containers/PublicRoute';
import HomePage from '../containers/HomePage';

const listRoutes = [
    {
        path : '/login',
        element : (
            <PublicRoute>
                <LoginPage />
            </PublicRoute>
        )
    },
    {
        path : '/home',
        element : (
            <PublicRoute>
                <HomePage />
            </PublicRoute>
        )
    }
];

export default listRoutes;
