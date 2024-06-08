import "core-js/stable/atob";
import { jwtDecode } from "jwt-decode";

// JWT 토큰을 받아서 만료 시간을 확인하는 함수
export const isTokenExpired = (token) => {
    const decodedToken = jwtDecode(token);

    const expirationTime = decodedToken.exp;

    const currentTime = Math.floor(Date.now() / 1000);

    if (expirationTime < currentTime) {
        // 토큰이 만료되었음
        return true;
    } else {
        // 토큰이 유효함
        return false;
    }
};

// 예시: 토큰이 만료되었는지 확인
// const accessToken = "your_access_token_here";
// const isExpired = isTokenExpired(accessToken);

// if (isExpired) {
//     console.log("토큰이 만료되었습니다.");
// } else {
//     console.log("토큰이 아직 유효합니다.");
// }
