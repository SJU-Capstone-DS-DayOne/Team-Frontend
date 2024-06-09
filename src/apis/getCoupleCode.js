import axios from "axios";
// import { postCoupleCode } from "./postCoupleCode";

export const getCoupleCode = async () => {
    // const memberId = localStorage.getItem("memberId");

    try {
        const response = await axios.get(
            `https://${import.meta.env.VITE_REACT_APP_BASE_URL}/couple-codes`
        );

        if (response.status === 200) {
            const { code } = response.data;

            return code;
        }
    } catch (error) {
        console.error(error);

        if (error.request.status === 403) console.log(123);
        return false;
    }
};
