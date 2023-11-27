import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRating, postRating, selectRating } from "../../features/rating/ratingSlice";
import RatingComponent from "../../components/RatingC/Rating";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { fetchRestaurantById, selectRestaurantById, setRestaurant } from "../../features/restaurant/restaurantSlice";
import { img } from "../../utils/fotos";
import RestaurantPlatos from "../../components/Platos/RestaurantPlatos";
import { Comentarios } from "../../components/comentarios/Comentarios";

function RestaurantDetail() {
    const dispatch = useDispatch();
    const restaurantId = useParams().id;
    const [averageRating, setAverageRating] = useState(null);
    const [restaurantInfo, setRestaurantInfo] = useState(null);


    // Obtener puntuaciones del restaurante y promedio al cargar la página
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await dispatch(fetchRating({ id: restaurantId }));
                const response2 = await dispatch(fetchRestaurantById({ id: restaurantId }));

                setRestaurantInfo({
                    name: response2.payload.data.name,
                    address: response2.payload.data.address,
                    schedule: response2.payload.data.schedule,
                });
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [dispatch, restaurantId]);



    // Selector para acceder a las puntuaciones
    // const ratings = useSelector(selectRating);
    // selector para acceder al restaurante
    const restaurant = useSelector(selectRestaurantById);

    // Función para enviar una nueva puntuación
    const handleAddRating = (rating) => {
        dispatch(postRating({ id: restaurantId, rating }));
    };

    return (
        <div className="flex lg:w-[100vw] lg:h-[87vh] lg:mt-24">
            <div className= "flex flex-col lg:w-[33%] bg-[#ccc] border border-[#D0D0D0]">
                <div className="flex lg:w-full">
                    {restaurantInfo && (
                        <div>
                            <div className="flex flex-col lg:w-full justify-between lg:p-[20px]">
                                <h2 className="lg:text-[40px] font-bold">{restaurantInfo.name}</h2>
                                <p className="lg:text-[18px] font-semibold text-[#595959]">{restaurantInfo.address}</p>
                                <p className="lg:text-[18px] font-semibold text-[#595959]">{restaurantInfo.schedule}</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="lg:text-[18px] font-semibold text-[#595959] lg:pl-[20px]">
                    <p>Promedio de puntuación: {averageRating}</p>
                    <RatingComponent onAddRating={handleAddRating} />
                </div>
                
                <Comentarios />
            
            </div>
            <div className="flex flex-col lg:w-[77%]">
                <div className="bg-[#fff] lg:w-100 p-3">
                    {restaurantInfo && (
                        <div>
                            <h1 className="lg:text-[30px] font-semibold">{restaurantInfo.name} - Menú</h1>
                        </div>
                    )}
                </div>
                    <RestaurantPlatos />
            </div>
        </div>

    );
}

export default RestaurantDetail;