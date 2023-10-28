import axios from 'axios'

export const login = async (email) => await axios.post('/api/login', { email });