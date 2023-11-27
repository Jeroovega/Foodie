import Category from "../components/category/Category";
import { useState, useEffect } from 'react';
import { fetchByCategories, selectRestByCategory } from "../features/restaurant/restaurantSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { img } from "../utils/fotos";
import { description } from "../utils/descriptions";

function Restaurants() {
  const [selectedCategory, setSelectedCategory] = useState('Hamburguesa');
  const [mostrarTexto, setMostrarTexto] = useState(null)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(fetchByCategories(selectedCategory));
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [dispatch, fetchByCategories, selectedCategory]);

  const handleCategory = (category) => {
    setSelectedCategory(category);
    setMostrarTexto(true)
  }
  const handleRestaurant = (id) => {
    navigate(`/restaurant/${id}/details`);
  }

  const restaurants = useSelector(selectRestByCategory)

  return (
    <>
      <Category onSelect={handleCategory} />
      <div className="w-[90%] m-auto flex flex-wrap gap-10 mt-20">
        <h1 className={`w-[100%] text-2xl font-bold text-[#000] ${mostrarTexto ? 'flex' : 'hidden'}`}>Resultados:</h1>
        <div className="flex flex-wrap justify-between gap-10">
          {restaurants &&
            restaurants.map((restaurant) => (
              <div key={restaurant.id} onClick={() => handleRestaurant(restaurant.id)} style={{ cursor: 'pointer' }}>
                <div className="w-96"> {/* Establecer una altura fija para la tarjeta */}
                  <div class="max-w-sm h-96 rounded overflow-hidden shadow-lg bg-white">
                    <img
                      class="lg:w-full lg:h-52 object-cover" // Establecer un tamaño fijo para la imagen
                      src={description.imagen[restaurant.name]}
                      alt="Sunset in the mountains"
                    />
                    <div class="px-6 py-4 flex flex-col items-stretch">
                      <div class="font-bold text-xl mb-2">{restaurant.name}</div>
                      <p class="text-gray-700 text-base">
                        {description.name[restaurant.name]}
                      </p>
                    </div>
                    <div class="px-6 pt-2 pb-12 mb-4">
                      <div className="">
                        <button className="w-full text-black border-none bg-[#f0b973b0] rounded-md cursor-pointer btn hover:text-white">
                          Ver más
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>



      </div>
    </>
  );
}

export default Restaurants;
