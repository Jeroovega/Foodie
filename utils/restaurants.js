import axios from 'axios'

export const getRestaurantById = async (id) => await axios.get(`http://localhost:3000/api/restaurants/${id}`);
