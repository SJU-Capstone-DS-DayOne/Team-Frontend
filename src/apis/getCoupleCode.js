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
        } else if (response.status == 403) console.log(1);
    } catch (error) {
        console.error(error);
        return false;
    }
};
