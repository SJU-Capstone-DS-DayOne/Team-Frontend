import axios from "axios";

export const getColdstart = async () => {
    const access = localStorage.getItem("access");
    axios.defaults.headers["access"] = access;

    try {
        const response = await axios.get(
            `https://${
                import.meta.env.VITE_REACT_APP_BASE_URL
            }/join/restaurant-candidates`
        );

        if (response.status === 200) {
            console.log(response);

            return response.data;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
};
