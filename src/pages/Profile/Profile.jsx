import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Profile() {
    const dispatch = useDispatch();
    return (
        <div>
            <Link to='/editProfile'>Editar Perfil</Link>
        </div>
    )
}

export default Profile;