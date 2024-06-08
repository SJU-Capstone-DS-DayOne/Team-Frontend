import axios from "axios";

export const getTypeInformation = async (name, isSelect) => {
    const access = localStorage.getItem("access");
    axios.defaults.headers["access"] = access;

    const params = {
        district: name,
        rst: isSelect["식당"],
        cafe: isSelect["카페"],
        bar: isSelect["술집"],
    };

    try {
        const response = await axios.get(
            `https://${
                import.meta.env.VITE_REACT_APP_BASE_URL
            }/recommended-restaurants`,
            { params }
        );

        if (response.status === 200) {
            return response;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
};
