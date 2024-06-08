import axios from "axios";

export const login = async (email, password) => {
    axios.defaults.withCredentials = true;
    // eslint-disable-next-line react-hooks/rules-of-hooks

    try {
        const response = await axios.post(
            `https://${import.meta.env.VITE_REACT_APP_BASE_URL}/login`,
            {
                email,
                password,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (response.status === 200) {
            console.log(response);
            const { access } = response.headers;

            localStorage.setItem("access", access);
            axios.defaults.headers["access"] = access;
            return true; // 로그인 성공
        }
    } catch (error) {
        console.error(error);
        return false; // 로그인 실패
    }
};
//
