import axios from "axios";

export const getNewAccessToken = async () => {
    const access = localStorage.getItem("access");
    localStorage.removeItem("access");

    const response = await axios.post(
        `https://${import.meta.env.VITE_REACT_APP_BASE_URL}/reissue`,
        access,
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
        localStorage.setItem("access", access);
    }
};
