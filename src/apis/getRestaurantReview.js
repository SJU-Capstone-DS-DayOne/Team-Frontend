import axios from "axios";

export async function getRestaurantReview(id) {
    axios.defaults.withCredentials = true;

    try {
        const response = await axios.get(
            `https://${
                import.meta.env.VITE_REACT_APP_BASE_URL
            }/restaurants/${id}/reviews`
        );

        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}
