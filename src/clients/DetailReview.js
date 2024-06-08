import { create } from "zustand";

const storeDetailReview = create((set) => ({
    detailReview: {},
    setDetailReview: (val) => set({ detailReview: val }),
}));

export default storeDetailReview;
