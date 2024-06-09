import axios from "axios";

export async function getNewAccessToken() {
    try {
        const response = await axios.post(
            `https://${import.meta.env.VITE_REACT_APP_BASE_URL}/reissue`,
            null,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );

        if (response.status === 200) {
            console.log(response);
            const { access } = response.headers;

            localStorage.setItem("access", access);

            return access;
        } else {
            throw new Error("Failed to reissue access token");
        }
    } catch (error) {
        console.error("Error reissuing access token", error);
        throw error;
    }
}
