import axios from "axios";

export async function getName() {
    axios.defaults.withCredentials = true;
    try {
        const response = await axios.get(
            `https://${import.meta.env.VITE_REACT_APP_BASE_URL}/members`,
            {}
        );

        if (response.status === 200) {
            console.log(response);
            return response.data;
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}
