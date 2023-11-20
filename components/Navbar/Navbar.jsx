import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Category from "../category/Category";

function Navbar() {
  const [id, setId] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/restaurant/${id}/details`);
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.setItem("isAuth", false);
    navigate("/session/login");
  };

  const handleMenuHamburguer = () => {

  } 
  
  return (
    <>
      <div>
        <button>Menu Secciones</button>
      </div>
      <div id="hamburgue-menu">
        <div className="logo-menuH">F</div>
        <div>Close menu</div>
        <h3>Secciones</h3>
        <ul>
          <li>Restaurants</li>
          <li>Emprendimientos</li>
        </ul>
        <h3>Otros</h3>
        <ul>
          <li>Sobre Nosotros</li>
          <li>Contacto</li>
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          buscar
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <button type="submit">Ir al Restaurante</button>
      </form>
      <div>
        <button>Menu</button>
      </div>
      <div>
        {
          localStorage.getItem('isAuth') === 'true' ?
            <button onClick={handleLogout} >Cerrar Sesion</button> 
            : <>
            <button onClick={() => navigate('/session/register')}>Registrarse</button>
            <button onClick={() => navigate('/session/login')}>Iniciar Sesión</button>
            </>
        }
      </div>
    </>
  );
};

export default Navbar;