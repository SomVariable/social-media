import axios from 'axios'

export const registration = async (email, password) => {
    try {
        const response = await axios.post(`https://ancient-lake-62401.herokuapp.com/api/registration`, {
            email,
            password
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }
}