import React from 'react';
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import listRoutes from './routes';

const AppRoutes = () => {

    const routes = useRoutes(listRoutes)

    return routes;
}

export default React.memo(AppRoutes);