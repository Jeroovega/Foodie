import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectRestaurantById, fetchRestaurantById } from "../features/restaurant/restaurantSlice";


function Restaurants() {
    const id = useParams().id;
    const dispatch = useDispatch();
    const restaurant = useSelector(selectRestaurantById);

    useEffect(() => {
        console.log('Id:', id)
        console.log('Restaurant:', restaurant)
        dispatch(fetchRestaurantById(id));
    }, [dispatch, id]);

    return (
        <>
          <div>
            {restaurant ? (
              <>
                <h1>{restaurant.data.name}</h1>
                <p>{restaurant.data.address}</p>
                <p>{restaurant.data.schedule}</p>
                <button onClick={() => navigate(-1)}>Back</button>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </>
      );
}

export default Restaurants;
