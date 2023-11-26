import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRating, postRating, selectRating } from "../../features/rating/ratingSlice";
import RatingComponent from "../../components/RatingC/Rating";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { fetchRestaurantById, selectRestaurantById, setRestaurant } from "../../features/restaurant/restaurantSlice";
import { img } from "../../utils/fotos";
import RestaurantPlatos from "../../components/Platos/RestaurantPlatos";
import "./RestaurantDetail.css";

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
    // la funcion para reemplazar caracteres numericos por "num" es =>  .replace(/\d/g, "num")
    const restaurantImageKey = restaurantInfo?.name.toLowerCase().replace(/\s/g, "").replace(/&/g, "").replace(/'/g, "").replace(/\d/g, "num").replace(/,/g, "").replace(/í/g, "i").replace(/ñ/, "n");
    let restaurantImageSrc = img[restaurantImageKey];

    return (
        <div className="contenedor-rest-details">
            <div className="rest-menu-izquierda">
                <div className="rest-menu-izquierda-datos">
                    {restaurantInfo && (
                        <div>
                            <img src={restaurantImageSrc} alt={restaurantInfo.name} className="rest-izquierda-img" />
                            <div className="rest-izq-datos">
                                <h2 className="rest-izquierda-nombre">{restaurantInfo.name}</h2>
                                <p className="rest-izquierda-direccion">{restaurantInfo.address}</p>
                                <p className="rest-izquierda-horario">{restaurantInfo.schedule}</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="rest-izquierda-puntaje">
                    <p>Promedio de puntuación: {averageRating}</p>
                    <RatingComponent onAddRating={handleAddRating} />
                </div>
            </div>
            <div>
                <div className="rest-derecha-texto">
                    {restaurantInfo && (
                        <div>
                            <h1 className="rest-derecha-nombre">{restaurantInfo.name} - Menú</h1>
                        </div>
                    )}
                </div>
                <div className="rest-platos-derecha">
                    <div className="rest-derecha-cards">
                        <div className="rest-derecha-card">
                            <div className="text-card">
                                <h2>Sushi</h2>
                                <p >Sushi de salmón</p>
                            </div>
                            <img src="https://www.elespectador.com/resizer/K2brM6Hi31V7arlBysmWGMrj6mY=/525x350/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/SDB552A6BBHANGBCLVEIYRL3KY.jpg" alt="sushi" className="img-card" />
                        </div>
                    </div>
                    <div className="rest-derecha-cards">
                        <div className="rest-derecha-card">
                            <div className="text-card">
                                <h2>Sushi</h2>
                                <p >Sushi de salmón</p>
                            </div>
                            <img src="https://www.elespectador.com/resizer/K2brM6Hi31V7arlBysmWGMrj6mY=/525x350/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/SDB552A6BBHANGBCLVEIYRL3KY.jpg" alt="sushi" className="img-card" />
                        </div>
                    </div>
                    <div className="rest-derecha-cards">
                        <div className="rest-derecha-card">
                            <div className="text-card">
                                <h2>Sushi</h2>
                                <p >Sushi de salmón</p>
                            </div>
                            <img src="https://www.elespectador.com/resizer/K2brM6Hi31V7arlBysmWGMrj6mY=/525x350/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/SDB552A6BBHANGBCLVEIYRL3KY.jpg" alt="sushi" className="img-card" />
                        </div>
                    </div>
                    <div className="rest-derecha-cards">
                        <div className="rest-derecha-card">
                            <div className="text-card">
                                <h2>Sushi</h2>
                                <p >Sushi de salmón</p>
                            </div>
                            <img src="https://www.elespectador.com/resizer/K2brM6Hi31V7arlBysmWGMrj6mY=/525x350/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/SDB552A6BBHANGBCLVEIYRL3KY.jpg" alt="sushi" className="img-card" />
                        </div>
                    </div>
                    <RestaurantPlatos className='rest-derecha-cards' />
                    <RestaurantPlatos className='rest-derecha-cards' />
                    <RestaurantPlatos className='rest-derecha-cards' />
                    <RestaurantPlatos className='rest-derecha-cards' />
                    <RestaurantPlatos className='rest-derecha-cards' />
                    <RestaurantPlatos className='rest-derecha-cards' />
                </div>

            </div>
        </div>

    );
}

export default RestaurantDetail;