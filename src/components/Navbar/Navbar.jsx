import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";

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

  useEffect(() => {
    const path = window.location.pathname;

    if (path === "/login" || path === "/register") {
      const navbar = document.getElementById   ("searchbar");
      navbar.classList.add("invisible");
    }
  }, []);
  const isAuth = localStorage.getItem("isAuth");

  const toggleMenu = () => {
    const menu = document.getElementById("hamburgue-menu");
    menu.classList.toggle("invisible");
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
    <nav className="flex flex-row bg-black text-white w-full text-sm text-center items-center p-3 justify-between absolute top-0 left-0">
      <div className="m-2 text-center" onClick={toggleMenu}>
       <IoMdMenu className="text-2xl"/>
      </div>
      <div id="hamburgue-menu" className="flex flex-col absolute left-0 top-[4rem] bg-black  w-3/6 h-[100vh] gap-2 text-center">
        <div className="absolute right-0 top-2 pr-2.5" onClick={closeMenu}>
        <MdClose  className="text-2xl"/>
        </div>
        <div className="mt-6 gap-4 flex flex-col mb-4">
        <h3 className="text-lg">Secciones</h3>
        <ul className="flex flex-col gap-2">
          <li>Restaurants</li>
          <li>Emprendimientos</li>
        </ul>
        <h3 className="text-lg">Otros</h3>
        <ul>
          <li>Sobre Nosotros</li>
        </ul>
        </div>
      </div>
      <form onSubmit={handleSubmit} id="searchbar">
        <label className="absolute text-black p-1.5 ml-2">
          buscar
        </label>
        <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="border-2 border-black rounded-md p-1"
          />
        <button></button>
      </form>
      <div className="m-2 p-1" onClick={toggleMenu2}>
      <FaUser />
      </div>
      <div id="user-menu" className="absolute right-0 mt-[9.5rem] gap-3 bg-black flex flex-col border p-4">
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