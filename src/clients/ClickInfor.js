import { create } from "zustand";

const storeClickInfor = create((set) => ({
    noClick: false,
    setNoClick: () => set((state) => ({ noClick: !state.noClick })),
}));

export default storeClickInfor;
