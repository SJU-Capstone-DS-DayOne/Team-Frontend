import { create } from "zustand";

const storeFinalSelect = create((set) => ({
    finalRestaurant: "",
    finalCafe: "",
    finalBar: "",
    setFinalRestaurant: (val) => set({ finalRestaurant: val }),
    setFinalCafe: (val) => set({ finalCafe: val }),
    setFinalBar: (val) => set({ finalBar: val }),
    onFinalClear: () =>
        set({
            finalRestaurant: "",
            finalCafe: "",
            finalBar: "",
        }),
}));

export default storeFinalSelect;
