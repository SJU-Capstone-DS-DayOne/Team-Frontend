import { create } from "zustand";

const storeCategoryFocus = create((set) => ({
    focus: "식당",
    setFocus: (val) => set({ focus: val }),
    clearFocus: () =>
        set({
            focus: "식당",
        }),
}));

export default storeCategoryFocus;
