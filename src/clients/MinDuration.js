import { create } from "zustand";

const storeMinDuration = create((set) => ({
    duration: 0,
    setDuration: (val) => set({ duration: val }),
    onClearDuration: () => set({ duration: 0 }),
}));

export default storeMinDuration;
