import axios from "axios";
import { getNewAccessToken } from "./vaildAccessToken";

export const getTypeInformation = async (name, isSelect) => {
    const params = {
        district: name,
        rst: isSelect["식당"],
        cafe: isSelect["카페"],
        bar: isSelect["술집"],
    };

    async function makeRequest() {
        let access = localStorage.getItem("access");
        try {
            const response = await axios.get(
                `https://${
                    import.meta.env.VITE_REACT_APP_BASE_URL
                }/recommended-restaurants`,
                {
                    params,
                    headers: {
                        Access: access,
                    },
                }
            );

            if (response.status === 200) {
                return response;
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
