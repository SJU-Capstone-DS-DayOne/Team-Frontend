import { create } from "zustand";

const storeDetailInfor = create((set) => ({
    detailInfor: {},
    setDetailInfor: (val) => set({ detailInfor: val }),
}));

export default storeDetailInfor;
