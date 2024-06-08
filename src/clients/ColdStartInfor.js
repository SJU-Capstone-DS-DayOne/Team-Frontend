import { create } from "zustand";

const storeColdStartInfor = create((set) => ({
    infor: {},
    setInfor: (val) => set({ infor: val }),
}));

export default storeColdStartInfor;
