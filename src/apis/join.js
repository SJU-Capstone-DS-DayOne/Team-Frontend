import axios from "axios";

export const join = async (email, password, nickname, gender, phone, birth) => {
    axios.defaults.withCredentials = true;
    try {
        const response = await axios.post(
            `https://${import.meta.env.VITE_REACT_APP_BASE_URL}/join`,
            {
                email: email,
                password: password,
                nickname: nickname,
                gender: gender,
                birthOfDate: birth,
                phone: phone,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
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
