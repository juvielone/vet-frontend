import axios from 'axios'

const API_URL = "https://vetapp-api.onrender.com/api/"

// Register User
const register = async (userData) => {
    const response = await axios.post(API_URL + "register", userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data

}


// Logout User
const logout = async () => {
    localStorage.removeItem('user')
}


// Login User
const login = async (userData) => {
    const response = await axios.post(API_URL + "login", userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data

}

const authService = {
    register, login, logout
}

export default authService;