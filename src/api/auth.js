import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/api-token-auth/`, { username, passowrd });
        const token = response.data.token;
        localStorage.setItem('token', token);
        return token;
    } catch (error) {
        console.error('Algo sucedió mal: ', error);
        throw error;
    }
};

export default login;