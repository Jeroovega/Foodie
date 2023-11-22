import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import './navbar.css';
// import logo from '../../public/logo.png';

function Navbar() {
  const [id, setId] = useState('');
  const navigate = useNavigate();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const showUserConnect = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/restaurant/${id}/details`);
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.setItem("isAuth", false);
    navigate("/login");
  };

  useEffect(() => {
    const path = window.location.pathname;

    if (path === "/login" || path === "/register") {
      const navbar = document.getElementById("searchbar");
      navbar.classList.add("invisible");
    }
  }, []);
  const isAuth = localStorage.getItem("isAuth");

  const toggleMenu = () => {
    const menu = document.getElementById("hamburgue-menu");
    if (menu.classList.contains("invisible")) {
      menu.classList.remove("invisible");
    } else {
      menu.classList.add("invisible");
    }
  }

  const closeMenu = () => {
    const menu = document.getElementById("hamburgue-menu");
    menu.classList.add("invisible");
  }
  const toggleMenu2 = () => {
    const menu = document.getElementById("user-menu");
    menu.classList.toggle("invisible");
  }

  return (
    <nav className="flex flex-row bg-[#fff] w-full text-sm text-center items-center p-3 lg:p-4 justify-between absolute top-0 left-0">
      <div className="m-2 text-center" onClick={toggleMenu}>
        <IoMdMenu className="text-2xl lg:text-4xl text-[#000] cursor-pointer" />
      </div>
      <div id="hamburgue-menu" className="flex flex-col absolute left-0 top-[5.3rem] bg-[#fff] w-3/6 h-[93vh] gap-2 text-center lg:w-[20rem] invisible">

        <div className="absolute right-0 top-2 pr-2.5 cursor-pointer" onClick={closeMenu}>
          <MdClose className="text-2xl" />
        </div>
        <div className="mt-6 gap-4 flex flex-col mb-4 lg:h-full lg:gap-10">
          <a href="/">LOGO</a>
          <div className="contenedor-menu gap-10">
            <div>
              <h3 className="titulo-menu text-4xl">SECCIONES</h3>
              <div className="separador-login-register" />
              <ul className="texto-menu flex flex-col mt-10 gap-10 text-left font-semibold ">
                <li className="cursor-pointer flex justify-between items-center">RESTAURANTS <IoIosArrowForward /></li>
                <li className="cursor-pointer flex justify-between items-center">EMPRENDIMIENTOS <IoIosArrowForward /></li>
              </ul>
            </div>
            <div>
              <h3 className="titulo-menu text-4xl TE">OTROS</h3>
              <div className="separador-login-register" />
              <ul className="texto-menu flex flex-col mt-10 gap-10 text-left font-semibold">
                <li className="cursor-pointer flex justify-between items-center">SOBRE NOSOTROS <IoIosArrowForward /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} id="searchbar">
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="input_search border-2 border-[#a3a1a1] rounded-md p-1 lg:p-3 lg:w-96 lg:h-12 cursor-text"
          placeholder="Comidas, restaurantes, etc."
        />
        <button></button>
      </form>
      <div className="m-2 p-1" onClick={toggleMenu2}>

        <FaUser className='lg:text-3xl cursor-pointer'/>
      </div>
      <div id="user-menu" className={`absolute right-0 mt-[9.5rem] gap-3 bg-[#fff] flex flex-col p-4 lg:w-52 rounded-sm lg:text-lg font-semibold border-2 border-[#a3a1a1] cursor-pointer lg:mr-6 lg:mt-[11.6rem] ${isUserMenuOpen ? '' : 'invisible'}`}>
        {
          isAuth === "true" ? (
            <>
              <button onClick={() => navigate("/profile")}>Profile</button>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <button onClick={() => navigate("/login")}>Login</button>
              <button onClick={() => navigate("/register")}>Register</button>
            </>
          )
        }
      </div>
    </nav>
  );
};

export default Navbar;