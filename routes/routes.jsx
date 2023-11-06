import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Restaurants from '../pages/Restaurants';
import { lazy } from 'react';
import Session from '../pages/UserSession/Session';

const Register = lazy(() => import('../components/Register/Register'));
const Login = lazy(() => import('../components/Login/Login'));

function AppRoutes() {
    return (
        <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Restaurants />} />
            <Route path='/session' element={<Session />} />
            <Route path='/session/login' element={<Login />} />
            <Route path='/session/register' element={<Session />} />
            <Route path='/restaurants/:id' element={<Restaurants />} />
        </Routes>
        </>
    );
};

export default AppRoutes;