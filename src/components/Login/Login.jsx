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
        navigate('/restaurants');
      }
    } catch (error) {
      console.error("Error inesperado:", error);
    }
  }
  return (
    <div className="text-center mb-24 lg:mb-0 lg:flex lg:w-[70rem]">
      <div className="lg:w-full lg:flex lg:flex-col lg:justify-center">
      <h1 className="text-[3rem] text-[#199B1E] font-extrabold mb-4 lg:flex">FOODIE</h1>
      <h3 className="hidden lg:flex lg:text-2xl lg:font-semibold lg:w-[80%] lg:text-left">Foodie te ayuda a encontrar un lugar para compartir con las personas que forman parte de tu vida.</h3>
      </div>
      <div className="bg-white flex flex-col items-center p-6 rounded-md h-auto gap-4 lg:p-10">
        <p className="font-semibold text-[#a3a1a1]">Iniciar Sesión</p>
      <input
        className="border border-gray-300 p-1.5 pl-3 rounded-sm lg:p-2 lg:pl-4 lg:w-96"
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border p-1.5 pl-3 rounded-sm border-gray-300  lg:p-2 lg:pl-4 lg:w-96"
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type='submit' onClick={handleLogin} className="bg-[#199B1E] pl-[2.7rem] pr-[2.7rem] pt-2 pb-2 rounded-sm text-white lg:p-2 lg:pl-4 lg:w-96">INICIAR SESION</button>
      <div className="flex flex-col">
      <p>¿No tienes cuenta?</p>
        <button
         className="text-blue-900 underline underline-offset-2"
         onClick={() => navigate("/register")}>Registrarse</button>
      </div>
    </div>
    </div>
  )
}

export default Login;