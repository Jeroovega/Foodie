import React, { useState, useEffect } from 'react';
import { fetchPlatos } from '../../features/platos/platosSlice';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const RestaurantPlatos = () => {
  const [platos, setPlatos] = useState([]);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  // Usar useParams para obtener el id de la URL
  const { id: restaurantId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(fetchPlatos(restaurantId));
        setPlatos(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [dispatch, restaurantId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Platos del restaurante</h2>
      {/* Renderiza tu lista de platos aquí */}
    </div>
  );
};

export default RestaurantPlatos;
