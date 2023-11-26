import Category from "../components/category/Category";
import { useState, useEffect } from 'react';
import { fetchByCategories, selectRestByCategory } from "../features/restaurant/restaurantSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Restaurants() {
    const [selectedCategory, setSelectedCategory] = useState('Hamburguesa');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await dispatch(fetchByCategories(selectedCategory));
        } catch(error) {
          console.log(error);
        }
      }
      fetchData();
    }, [dispatch, fetchByCategories, selectedCategory]);

    const handleCategory = (category) => {
      setSelectedCategory(category);
    }
    const handleRestaurant = (id) => {
      navigate(`/restaurant/${id}/details`);
    }

    const restaurants = useSelector(selectRestByCategory)
    return (
        <>
          <Category onSelect={handleCategory}/>
            {
              restaurants && restaurants.map((restaurant) => (
                <div key={restaurant.id} onClick={() => handleRestaurant(restaurant.id)} style={{ cursor: 'pointer' }}>
                  <h1>{restaurant.name}</h1>
                </div>
              ))
            }
        </>
      );
}

export default Restaurants;
