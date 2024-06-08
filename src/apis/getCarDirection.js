export async function getCarDirection(
    restaurantInforLat,
    restaurantInforLng,
    cafeInforLat = null,
    cafeInforLng = null,
    barInforLat = null,
    barInforLng = null
) {
    const url = "https://apis-navi.kakaomobility.com/v1/directions";

    // 출발지(origin), 목적지(destination)의 좌표를 문자열로 변환합니다.
    const origin = `${restaurantInforLng},${restaurantInforLat}`;
    const destination = barInforLat
        ? `${barInforLng},${barInforLat}`
        : `${cafeInforLng},${cafeInforLat}`;
    const waypoint = `${cafeInforLng},${cafeInforLat}`;

    // 요청 헤더를 추가합니다.
    const headers = {
        Authorization: `KakaoAK ${
            import.meta.env.VITE_REACT_APP_KAKAOMAP_REST_API_KEY
        }`,
        "Content-Type": "application/json",
    };

    // 표3의 요청 파라미터에 필수값을 적어줍니다.
    const queryParams = new URLSearchParams({
        origin: origin,
        destination: destination,
        waypoints: waypoint,
    });

    const requestUrl = `${url}?${queryParams}`; // 파라미터까지 포함된 전체 URL

    try {
        const response = await fetch(requestUrl, {
            method: "GET",
            headers: headers,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);
        return data;
    } catch (error) {
        console.error("Error:", error);
    }
}
