import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RequestEditUser } from "../../features/login/loginSlice";
import { selectEmail } from "../../features/login/loginSlice";
import { useNavigate } from "react-router-dom";

function EditProfile() {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const email = useSelector(selectEmail);
    const navigate = useNavigate();

    async function handleForm(e) {
        e.preventDefault();
        console.log(email, firstName, lastName, password);
        dispatch(RequestEditUser({ email, firstName, lastName, password }))
        navigate('/profile');
    }
    
    return (
        <div>
            <form>
                <input type="text" placeholder="Nombre" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <input type="text" placeholder="Apellido" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" onClick={
                    (e) => handleForm(e)
                 }>Guardar cambios</button>
            </form>
        </div>
    )
};

export default EditProfile;