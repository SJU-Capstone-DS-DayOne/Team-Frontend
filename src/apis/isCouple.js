import axios from "axios";

export async function isCouple() {
    axios.defaults.withCredentials = true;
    try {
        const response = await axios.get(
            `https://${import.meta.env.VITE_REACT_APP_BASE_URL}/couples`,
            {}
        );

        if (response.status === 200) {
            console.log(response);
            return response.data.isCouple;
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}
