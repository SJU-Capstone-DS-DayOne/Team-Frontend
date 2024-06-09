import axios from "axios";
// import { getNewAccessToken } from "./vaildAccessToken";

export const logout = async () => {
    axios.defaults.withCredentials = true;
    // eslint-disable-next-line react-hooks/rules-of-hooks

    try {
        const response = await axios.post(
            `https://${import.meta.env.VITE_REACT_APP_BASE_URL}/logout`,
            null,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        console.log(response);
        localStorage.removeItem("access");
        return true; // 로그인 성공
    } catch (error) {
        console.error(error);
        localStorage.removeItem("access");
        return true; // 로그인 실패
    }
};
//
