import axios from "axios";

export const postCoupleCode = async (code) => {
    try {
        const response = await axios.post(
            `https://${import.meta.env.VITE_REACT_APP_BASE_URL}/couples`,
            {
                loverCode: code,
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
