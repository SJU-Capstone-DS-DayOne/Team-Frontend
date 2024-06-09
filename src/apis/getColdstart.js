import axios from "axios";
import { getNewAccessToken } from "./vaildAccessToken";

export const getColdstart = async () => {
    axios.defaults.withCredentials = true;
    async function makeRequest() {
        let access = localStorage.getItem("access");
        try {
            const response = await axios.get(
                `https://${
                    import.meta.env.VITE_REACT_APP_BASE_URL
                }/join/restaurant-candidates`,
                {
                    headers: {
                        Access: access,
                    },
                }
            );

            if (response.status === 200) {
                console.log(response);
                return response.data;
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
