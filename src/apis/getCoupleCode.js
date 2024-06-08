import axios from "axios";
// import { postCoupleCode } from "./postCoupleCode";

export const getCoupleCode = async () => {
    // const memberId = localStorage.getItem("memberId");
    const access = localStorage.getItem("access");
    axios.defaults.headers["access"] = access;

    try {
        const response = await axios.get(
            `https://${import.meta.env.VITE_REACT_APP_BASE_URL}/couple-codes`
        );

        if (response.status === 200) {
            console.log(response);
            const { code } = response.data;

            return code;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
};
