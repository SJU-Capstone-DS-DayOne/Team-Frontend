import axios from "axios";
import { getNewAccessToken } from "./vaildAccessToken";

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

    async function makeRequest() {
        let access = localStorage.getItem("access");
        try {
            const response = await axios.post(
                `https://${
                    import.meta.env.VITE_REACT_APP_BASE_URL
                }/date-courses`,
                requestBody,
                {
                    headers: {
                        Access: access,
                    },
                }
            );

            if (response.status === 200) {
                console.log(response);

                return true;
            }
        } catch (error) {
            console.error(error);
            if (error.response.status === 401) {
                localStorage.removeItem("access");
                const newAccessToken = await getNewAccessToken();
                if (newAccessToken) {
                    return makeRequest(); // Retry the original request
                }
            }
            console.error(error);
            throw error;
        }
    }

    return makeRequest();
};
