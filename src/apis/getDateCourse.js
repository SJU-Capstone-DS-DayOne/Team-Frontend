import axios from "axios";

export async function getDateCourse() {
    const access = localStorage.getItem("access");

    axios.defaults.headers["access"] = access;
    axios.defaults.withCredentials = true;
    try {
        const response = await axios.get(
            `https://${import.meta.env.VITE_REACT_APP_BASE_URL}/date-courses`
        );

        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}
