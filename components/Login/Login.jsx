import React from "react";
import { useDispatch } from 'react-redux';
import { login, loginSetData } from '../../features/login/loginSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      console.log("Email y contraseña son requeridos");
      return;
    }
    try {
      const response = await dispatch(login({ email, password }));
      dispatch(loginSetData(response.payload));
      if (login.fulfilled.match(response)) {
        console.log(`Bienvenido ${email}!`);
        // navigate('/');
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
      <div>
        <a href="#">Registrarse</a>
        <a href="#">¿Olvidaste tu contraseña?</a>
      </div>
    </div>
  )
}

export default Login;