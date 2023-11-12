import React from "react";
import { useState } from "react";
import { postRating } from "../../utils/rating";

const RatingComponent = ({ onAddRating }) => {
    const [rating, setRating] = useState(0);
    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };    
    const handleRateRestaurant = async () => {
        const id = localStorage.getItem('userId');
        const restaurantId = window.location.pathname.split('/')[2];
        try {
            console.log({ id, restaurantId, rating });
            const response = await postRating({ id, restaurantId, rating });
            if (response.status === 201) {
                alert('puntuacion agregada');
                console.log(response);
                onAddRating(rating);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div>
                <span>Tu puntuación: {rating} estrellas</span>
            </div>
            <div>
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        onClick={() => handleRatingChange(star)}
                        style={{ cursor: 'pointer' }}
                    >
                        {star}
                    </span>
                ))}
            </div>
            <button onClick={handleRateRestaurant}>Puntuar</button>
        </div>
    )
};

export default RatingComponent;