import axios from "axios";
import { getNewAccessToken } from "./vaildAccessToken";

export const postCoupleCode = async (code) => {
    axios.defaults.withCredentials = true;
    async function makeRequest() {
        let access = localStorage.getItem("access");
        try {
            const response = await axios.post(
                `https://${import.meta.env.VITE_REACT_APP_BASE_URL}/couples`,
                {
                    loverCode: code,
                },
                {
                    headers: {
                        Access: access,
                    },
                }
            );

            return response;
        } catch (error) {
            if (error.response.status === 401) {
                localStorage.removeItem("access");
                const newAccessToken = await getNewAccessToken();
                if (newAccessToken) {
                    return makeRequest(); // Retry the original request
                }
            }
            return error;
        }
    }

    return makeRequest();
};
