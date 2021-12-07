import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Login from '../components/Login';
import { Registro } from '../components/Registro';
import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {


    return (
        <BrowserRouter>
            <Routes>

                <Route path="/login" element={<Login/> } />

                <Route path="/registro" element={<Registro/>} />

                <Route path="/*" element={<DashboardRoutes/>}/>

            </Routes>
        </BrowserRouter>
    )
}
