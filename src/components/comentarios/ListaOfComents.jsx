import axios from "axios";
import { useEffect, useState } from "react";

export const ListaOfComents = () => {
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/comments/comment"
        );
        setComentarios(response.data.comments);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [comentarios]);
  return (
    <div className="container mt-4 ml-5">
      {comentarios.map((comentario) => (
        <div className="flex flex-col lg:w-full justify-between lg:p-[20px]">
          <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 px-2 py-2 w-56">
            <p className="lg:text-[18px] font-semibold text-[#595959]">
              {comentario.description}
            </p>
            <p className="lg:text-[18px] font-semibold text-[#595959]">
              {comentario.restaurantId}
            </p>
                <button className="bg-red-400 text-white rounded-lg px-2">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};
