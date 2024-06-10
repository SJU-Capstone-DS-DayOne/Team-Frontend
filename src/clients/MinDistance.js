import { create } from "zustand";

const storeMinDistance = create((set) => ({
    distance: 0,
    setDistance: (val) => set({ distance: val }),
    onClearDistance: () => set({ distance: 0 }),
}));

export default storeMinDistance;
