import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRating, postRating, selectRating } from "../../features/rating/ratingSlice";
import RatingComponent from "../../components/RatingC/Rating";
import { useParams } from "react-router-dom";
import { useState } from "react";

function RestaurantDetail() {
    const dispatch = useDispatch();
    const restaurantId = useParams().id;
    const [averageRating, setAverageRating] = useState(null);
    
    // Obtener puntuaciones del restaurante y promedio al cargar la página
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await dispatch(fetchRating({ id: restaurantId }));
                const newAverageRating = response.payload.averageRating.averageRating.toFixed(1);
                setAverageRating(newAverageRating);
            } catch (error) {
                console.log(error);
            };
        }
        fetchData();
    }, []);

    
    // Selector para acceder a las puntuaciones
    const ratings = useSelector(selectRating);

    // Función para enviar una nueva puntuación
    const handleAddRating = (rating) => {
        dispatch(postRating({ id: restaurantId, rating }));
    };

    return (
        <div>
            <h1>RestaurantDetail</h1>
            {/* Renderiza la información del restaurante aquí */}
            <div>
                <p>Promedio de puntuación: {averageRating}</p>
            </div>
            {/* Mapea y muestra las puntuaciones anteriores si es necesario */}
            {ratings && ratings.map((rating) => (
                <div key={rating.id}>
                    <p>{rating.user} puntuó con {rating.rating} estrellas</p>
                </div>
            ))}
            {/* Componente de puntuación */}
            <RatingComponent onAddRating={handleAddRating} />
        </div>
    );
}

export default RestaurantDetail;