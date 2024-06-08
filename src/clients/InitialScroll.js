import { create } from "zustand";

const storeScroll = create((set) => ({
    scrollToTarget: false, // scroll 이동여부
    targetComponent: null, // 스크롤 어디로 이동할지
    readyScrollToTarget: () => set({ scrollToTarget: true }),
    changeTargetComponent: (value) => set({ targetComponent: value }),
}));

export default storeScroll;
