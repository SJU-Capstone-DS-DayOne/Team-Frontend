import axios from "axios";

export const postColdStart = async (idList) => {
    axios.defaults.withCredentials = true;

    try {
        const response = await axios.post(
            `https://${
                import.meta.env.VITE_REACT_APP_BASE_URL
            }/join/restaurants`,
            {
                restaurantIds: idList,
            },
            {}
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
