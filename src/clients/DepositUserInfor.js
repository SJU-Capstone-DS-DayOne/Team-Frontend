import { create } from "zustand";

const storeDepositUserInfor = create((set) => ({
    memberId: 0,
    id: "",
    nickname: "",
    gender: "",
    phone: "01012345678",
    birth: "19990101",
    setMemberId: (val) => set({ memberId: val }),
    setId: (val) => set({ id: val }),
    setNickname: (val) => set({ nickname: val }),
    setPhone: (val) => set({ phone: val }),
    setBirth: (val) => set({ birth: val }),
    setGender: (val) => set({ gender: val }),
}));

export default storeDepositUserInfor;
