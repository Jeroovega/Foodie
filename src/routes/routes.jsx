import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Restaurants from '../pages/Restaurants';
import { lazy } from 'react';
import Session from '../pages/UserSession/Session';
import RestaurantDetail from '../pages/RestDetail/RestaurantDetail';
import Profile from '../pages/Profile/Profile';
import EditProfile from '../pages/Profile/EditProfile'
const Register = lazy(() => import('../components/Register/Register'));
const Login = lazy(() => import('../components/Login/Login'));

function AppRoutes() {
    return (
        <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Session />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/restaurant/:id/details' element={<RestaurantDetail/>}/>
            <Route path='/restaurants' element={<Restaurants />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/editProfile' element={<EditProfile />} />
        </Routes>
        </>
    );
};

export default AppRoutes;