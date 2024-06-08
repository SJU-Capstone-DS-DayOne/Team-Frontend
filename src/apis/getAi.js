import axios from "axios";

export const getAi = async () => {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_REACT_APP_AI_BASE_URL}/recommend/couple`
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
