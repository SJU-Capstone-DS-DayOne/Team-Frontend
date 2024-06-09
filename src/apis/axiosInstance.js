import axios from "axios";
import { getNewAccessToken } from "./vaildAccessToken";
// Assume this function handles reissuing tokens

const axiosInstance = axios.create({
    baseURL: `https://${import.meta.env.VITE_REACT_APP_BASE_URL}`,
    withCredentials: true,
});

axiosInstance.interceptors.response.use(
    (response) => {
        console.log(response);
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        console.log(originalRequest);
        if (error.response.status === 401 || error.response.status === 403) {
            try {
                localStorage.removeItem("access");
                // Get new access token
                await getNewAccessToken();
                // Retry the original request with the new token
                return axiosInstance(originalRequest);
            } catch (tokenError) {
                console.error("Failed to refresh token", tokenError);
                // Optionally, handle additional actions like logging out the user
                return Promise.reject(tokenError);
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
