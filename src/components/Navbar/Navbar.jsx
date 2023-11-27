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
    <nav className="flex flex-row bg-[#fff] w-full text-sm text-center items-center p-3 lg:p-4 justify-between fixed top-0 left-0">
      <div className="m-2 text-center" onClick={toggleMenu}>
        <IoMdMenu className="text-2xl lg:text-4xl text-[#000] cursor-pointer" />
      </div>
      <div id="hamburgue-menu" className="flex flex-col absolute left-0 top-[5.3rem] bg-[#fff] w-3/6 h-[93vh] gap-2 text-center lg:w-[20rem] invisible">

        <div className="absolute right-0 top-2 pr-2.5 cursor-pointer" onClick={closeMenu}>
          <MdClose className="text-2xl" />
        </div>
        <div className="flex flex-col gap-4 mt-6 mb-4 lg:h-full lg:gap-10">
          <a href="/">LOGO</a>
          <div className="gap-10 contenedor-menu">
            <div>
              <h3 className="text-4xl titulo-menu">SECCIONES</h3>
              <div className="separador-login-register" />
              <ul className="flex flex-col gap-10 mt-10 font-semibold text-left texto-menu ">
                <li className="flex items-center justify-between cursor-pointer">RESTAURANTS <IoIosArrowForward /></li>
                <li className="flex items-center justify-between cursor-pointer">EMPRENDIMIENTOS <IoIosArrowForward /></li>
              </ul>
            </div>
            <div>
              <h3 className="text-4xl titulo-menu TE">OTROS</h3>
              <div className="separador-login-register" />
              <ul className="flex flex-col gap-10 mt-10 font-semibold text-left texto-menu">
                <li className="flex items-center justify-between cursor-pointer">SOBRE NOSOTROS <IoIosArrowForward /></li>
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
        <button className="h-10 px-2 py-2 m-4 mx-2 text-white rounded-lg bg-zinc-700">Search</button>
      </form>
      <div className="p-1 m-2" onClick={toggleMenu2}>

        <FaUser className='cursor-pointer lg:text-3xl'/>
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