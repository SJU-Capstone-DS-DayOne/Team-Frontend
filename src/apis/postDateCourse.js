import axios from "axios";

export const postDateCourse = async (
    rstRestaurantId,
    cafeRestaurantId = null,
    barRestaurantId = null
) => {
    axios.defaults.withCredentials = true;

    const requestBody = {
        rstRestaurantId,
        ...(cafeRestaurantId !== null && { cafeRestaurantId }),
        ...(barRestaurantId !== null && { barRestaurantId }),
    };

    try {
        const response = await axios.post(
            `https://${import.meta.env.VITE_REACT_APP_BASE_URL}/date-courses`,
            requestBody
        );

        if (response.status === 200) {
            console.log(response);

            return true;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
};
