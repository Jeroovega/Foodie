import React, { useState, useEffect } from "react";
import { fetchPlatos } from "../../features/platos/platosSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

const RestaurantPlatos = () => {
  const [platos, setPlatos] = useState([]);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  // Usar useParams para obtener el id de la URL
  const { id: restaurantId } = useParams();
  const fetchData = async () => {
    // try {
    //   const response = await dispatch(fetchPlatos({ restaurantId }));
    //   console.log("platos", response.data.data);
    //   setPlatos(response.data.data.platos);
    // } catch (error) {
    //   setError(error.message);
    // }
    const response = await axios.get(`http://localhost:3000/api/restaurants/${restaurantId}/platos`)
    console.log("platos", response.data.data);
    setPlatos(response.data.data.platos);
  };
  useEffect(() => {
    fetchData();
  }, [restaurantId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Platos del restaurante</h2>
      {platos.map((plato) => (
        <div key={plato.id}>
          <h3>{plato.name}</h3>
          <p>{plato.description}</p>
          <p>{plato.price}</p>
        </div>
      ))}
    </div>
  );
};

export default RestaurantPlatos;
