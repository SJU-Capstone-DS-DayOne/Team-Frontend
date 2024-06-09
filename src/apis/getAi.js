import axios from "axios";

export const getAi = async () => {
    const access = localStorage.getItem("access");
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_REACT_APP_AI_BASE_URL}/recommend/couple`,
            {
                headers: {
                    Access: access,
                },
            }
        );

        if (response.status === 200) {
            console.log(response);

            return response;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
};
