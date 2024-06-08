import axios from "axios";

export const postDateCourseReview = async (id, content) => {
    axios.defaults.withCredentials = true;

    try {
        const response = await axios.post(
            `https://${
                import.meta.env.VITE_REACT_APP_BASE_URL
            }/date-course-restaurant/${id}/reviews`,
            {
                content: content,
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
