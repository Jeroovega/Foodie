import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../features/register/RegisterSlice';
import { useState } from 'react';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleRegister(e) {
        e.preventDefault();
        if (!email || !password) {
            console.log("Email y contraseña son requeridos");
            return;
        }
        try {
            const response = await dispatch(register({ email, password }));
            if (register.fulfilled.match(response)) {
            console.log(`Has sido registrado ${email}, ${password}!`);
            navigate(`/session/login`);
            }
        } catch (error) {
            console.error("Error inesperado:", error);
        }
    }

    return (
        <div>
            <input
                type="text"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder='Contraseña'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                type='submit'
                onClick={handleRegister}
            >
                Registrarse
            </button>
        </div>
    );
}

export default Register;