import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const [id, setId] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/restaurants/${id}`);
    }
    return (
        <form onSubmit={handleSubmit}>
        <label>
          Ingresar ID del restaurante:
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <button type="submit">Ir al Restaurante</button>
      </form>
    );
};

export default Navbar;