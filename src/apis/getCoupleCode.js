import axios from "axios";
import { getNewAccessToken } from "./vaildAccessToken";

export const getCoupleCode = async () => {
    axios.defaults.withCredentials = true;
    async function makeRequest() {
        let access = localStorage.getItem("access");
        try {
            const response = await axios.get(
                `https://${
                    import.meta.env.VITE_REACT_APP_BASE_URL
                }/couple-codes`,
                {
                    headers: {
                        Access: access,
                    },
                }
            );

            if (response.status === 200) {
                const { code } = response.data;

                return code;
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
