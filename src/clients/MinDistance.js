import { create } from "zustand";

const storeMinDistance = create((set) => ({
    distance: 0,
    setDistance: (val) => set({ distance: val }),
}));

export default storeMinDistance;
