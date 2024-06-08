import { create } from "zustand";

const storeInforScroll = create((set) => ({
    scroll: false,
    isScroll: () => set((state) => ({ scroll: !state.scroll })),
}));

export default storeInforScroll;
