export default function today() {
    const date = new Date().getDay();
    const week = [
        "일요일",
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일",
    ];

    return week.filter((val, idx) =>
        idx >= date && idx <= date + 2 ? val : null
    );
}
// getDay 반환값 = 일
