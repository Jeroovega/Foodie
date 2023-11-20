import Category from "../components/category/Category";
import { useState, useEffect } from 'react';
import { fetchByCategories, selectRestByCategory } from "../features/restaurant/restaurantSlice";
import { useDispatch, useSelector } from "react-redux";

function Restaurants() {
    const [selectedCategory, setSelectedCategory] = useState('Hamburguesa');
    const dispatch = useDispatch();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await dispatch(fetchByCategories(selectedCategory));
          console.log(response);
        } catch(error) {
          console.log(error);
        }
      }
      fetchData();
    }, [dispatch, fetchByCategories, selectedCategory]);

    const handleCategory = (category) => {
      setSelectedCategory(category);
    }

    const restaurants = useSelector(selectRestByCategory)
    return (
        <>
          <Category onSelect={handleCategory}/>
            {
              restaurants && restaurants.map((restaurant) => (
                <div key={restaurant.id}>
                  <h1>{restaurant.name}</h1>
                </div>
              ))
            }
        </>
      );
}

export default Restaurants;
