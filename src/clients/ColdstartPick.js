import create from "zustand";

// Zustand 스토어 정의
const storePick = create((set) => ({
    picks: [], // 초기 상태는 빈 배열
    length: 0, // 배열의 길이
    togglePicks: (pick) =>
        set((state) => {
            const isPickPresent = state.picks.includes(pick);
            const newPicks = isPickPresent
                ? state.items.filter((i) => i !== pick)
                : [...state.items, pick];
            return { items: newPicks, length: newPicks.length };
        }),
}));

export default storePick;
