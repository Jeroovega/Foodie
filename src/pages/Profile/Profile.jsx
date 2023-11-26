import { Link } from 'react-router-dom';
// recordar el email con useMemo
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestUserData, selectEmail, selectUserData } from '../../features/login/loginSlice';

function Profile() {
    const userData = useSelector(selectUserData);

    console.log(userData);
    return (
        <div>
            <div>
                <h1>Perfil</h1>
                <h2>Nombre: {userData.firstName}</h2>
                <h2>Apellido: {userData.lastName}</h2>
                <h2>Email: {userData.email}</h2>
            </div>
            <Link to='/editProfile'>Editar Perfil</Link>
        </div>
    );
}

export default Profile;