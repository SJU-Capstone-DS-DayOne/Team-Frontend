import axios from "axios";

export async function getRestaurantReview(id) {
    const access = localStorage.getItem("access");

    axios.defaults.headers["access"] = access;
    axios.defaults.withCredentials = true;
    const params = {
        page: 0,
        size: 5,
    };
    try {
        const response = await axios.get(
            `https://${
                import.meta.env.VITE_REACT_APP_BASE_URL
            }/restaurants/${id}/reviews`,
            { params }
        );

        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}
