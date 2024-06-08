import axios from "axios";

export const deleteMember = async () => {
    try {
        const response = await axios.delete(
            `https://${import.meta.env.VITE_REACT_APP_BASE_URL}/members`
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
