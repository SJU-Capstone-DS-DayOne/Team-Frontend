import axios from "axios";
// import { getNewRefreshToken } from "./vaildAccessToken";

export const mockLogin = async (email, password) => {
    try {
        const response = await axios.post(
            `/login`,
            {
                email,
                password,
            },
            {
                withCredentials: true, // withCredentials를 여기서 설정
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (response.status === 200) {
            console.log(response);
            const { access } = response.headers;
            console.log(access);
            localStorage.setItem("access", access);

            return true; // 로그인 성공
        }
    } catch (error) {
        console.error(error);
        return false; // 로그인 실패
    }
};
