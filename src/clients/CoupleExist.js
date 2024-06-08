import { create } from "zustand";

const storeCoupleExist = create((set) => ({
    coupleExist: false,
    setCoupleExist: (val) => set({ coupleExist: val }),
}));

export default storeCoupleExist;
