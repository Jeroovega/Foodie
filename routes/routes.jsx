import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Restaurants from '../pages/Restaurants';
import { lazy } from 'react';

const Login = lazy(() => import('../components/Login/Login'));

function AppRoutes() {
    return (
        <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Restaurants />} />
            <Route path='/login' element={<Login />} />
            <Route path='/restaurants/:id' element={<Restaurants />} />
        </Routes>
        </>
    );
};

export default AppRoutes;