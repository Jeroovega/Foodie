import axios from 'axios';

export const getPlatos = async (id) => await axios.get(`/api/restaurants/${id}/platos`)