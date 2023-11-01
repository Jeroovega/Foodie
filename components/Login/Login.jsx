import React from "react";
import { useDispatch } from 'react-redux';
import { login } from '../../features/login/loginSlice';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    // const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            console.log("Email y contraseña son requeridos");
          return;
        }
        try {
          const response = await dispatch(login({ email, password }));
          if (login.fulfilled.match(response)) {
            console.log(`Bienvenido ${email}!`);
          }
        } catch (error) {
          console.error("Error inesperado:", error);
        }
    }
    return (
        <div>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' onClick={handleLogin}>Iniciar sesión con JWT</button>
      </div>
    )
}

export default Login;