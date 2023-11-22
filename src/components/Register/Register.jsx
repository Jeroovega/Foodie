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
            navigate(`/login`);
            }
        } catch (error) {
            console.error("Error inesperado:", error);
        }
    }

    return (
        <div className="text-center mb-24 lg:mb-0 lg:flex lg:w-[70rem]">
            <div className='lg:w-full lg:flex lg:flex-col lg:justify-center'>
            <h1 className="text-[3rem] text-[#199B1E] font-extrabold mb-4 lg:flex">FOODIE</h1>
            <h3 className="hidden lg:flex lg:text-2xl lg:font-semibold lg:w-[80%] lg:text-left">Foodie te ayuda a encontrar un lugar para compartir con las personas que forman parte de tu vida.</h3>
            </div>
            <div className="bg-white flex flex-col items-center p-6 rounded-md h-auto gap-4 lg:p-10">
                <p className='font-semibold text-[#a3a1a1]'>Registrarse</p>
            <input
            className="border border-gray-300 p-1.5 pl-3 rounded-sm lg:p-2 lg:pl-4 lg:w-96"
                type="text"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
            className="border border-gray-300 p-1.5 pl-3 rounded-sm lg:p-2 lg:pl-4 lg:w-96"
                type="password"
                placeholder='Contraseña'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                className="bg-[#199B1E] pl-[3.2rem] pr-[3.2rem] pt-2 pb-2 rounded-sm text-white lg:p-2 lg:pl-4 lg:w-96"
                type='submit'
                onClick={handleRegister}
            >
                REGISTRARSE
            </button>
            <div>
                <p>¿Ya tienes cuenta?</p>
                <button
                    className="text-blue-900 underline underline-offset-2"
                    onClick={() => navigate("/login")}
                >
                    Inicia sesión
                </button>
            </div>
            </div>
        </div>
    );
}

export default Register;