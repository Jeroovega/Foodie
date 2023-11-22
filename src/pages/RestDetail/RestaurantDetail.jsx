import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRating, postRating, selectRating } from "../../features/rating/ratingSlice";
import RatingComponent from "../../components/RatingC/Rating";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { fetchRestaurantById, selectRestaurantById, setRestaurant } from "../../features/restaurant/restaurantSlice";

function RestaurantDetail() {
    const dispatch = useDispatch();
    const restaurantId = useParams().id;
    const [averageRating, setAverageRating] = useState(null);
    
    // Obtener puntuaciones del restaurante y promedio al cargar la página
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await dispatch(fetchRating({ id: restaurantId }));
                const response2 = await dispatch(fetchRestaurantById({ id: restaurantId }));
                const newAverageRating = response.payload.averageRating.averageRating.toFixed(1);
                setAverageRating(newAverageRating);
                dispatch(setRestaurant(response2.payload.restaurant));
            } catch (error) {
                console.log(error);
            };
        }
        fetchData();
    }, [dispatch]);

    
    // Selector para acceder a las puntuaciones
    const ratings = useSelector(selectRating);
    // selector para acceder al restaurante
    const restaurant = useSelector(selectRestaurantById);
    console.log(restaurant);
    
    // Función para enviar una nueva puntuación
    const handleAddRating = (rating) => {
        dispatch(postRating({ id: restaurantId, rating }));
    };

    
    return (
        <div>
            <div>
                
            </div>
            <div>
                <p>Promedio de puntuación: {averageRating}</p>
            </div>
            <RatingComponent onAddRating={handleAddRating} />
        </div>
    );
}

export default RestaurantDetail;