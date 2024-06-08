import { create } from "zustand";

const storeSignalCode = create((set) => ({
    signalCode: 0,
    setSignalCode: (val) => set({ signalCode: val }),
}));

export default storeSignalCode;
