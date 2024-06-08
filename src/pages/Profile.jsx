import { Link, useNavigate } from "react-router-dom";
import { useStore } from "zustand";
import storeDepositUserInfor from "../clients/DepositUserInfor";
import { useState } from "react";
import { deleteMember } from "../apis/deleteMember";
import { logout } from "../apis/logout";
import storeCoupleExist from "../clients/CoupleExist";
import { deleteCoupleDisconnect } from "../apis/deleteCoupleDisconnect";

export default function Profile() {
    const {
        id,
        nickname,
        phone,
        birth,
        gender,
        setNickname,
        setPhone,
        setBirth,
    } = useStore(storeDepositUserInfor);
    const { coupleExist, setCoupleExist } = useStore(storeCoupleExist);
    const navi = useNavigate();
    const [disconnect, setDisConnect] = useState(false);
    const [withdraw, setWithDraw] = useState(false);

    const onClickWithDraw = async () => {
        const res = await deleteMember();
        if (res) {
            localStorage.removeItem("access");
            navi("/Palette-FE/");
        }
    };

    const onLogout = async () => {
        const result = await logout();

        if (result) {
            navi("/Palette-FE/");
        }
    };
    const onCoupleDisconnect = async () => {
        const result = await deleteCoupleDisconnect();
        if (result) {
            setCoupleExist(false);
            navi("/Palette-FE/");
        }
    };

    return (
        <div className="w-full h-[90dvh] bg-[#f3f3f3] relative flex justify-center items-center mt-[10dvh]">
            <div className="flex flex-col w-[400px] px-8 py-6 bg-white rounded-[32px] ">
                <div className="font-[Pretendard-Bold] text-2xl  text-[#323232] ">
                    개인정보
                </div>
                <div className="flex flex-col items-center justify-center gap-3 mt-3">
                    <div className="w-full p-3 border-[1px] border-[#e2e2e2] rounded-xl">
                        <div className="text-[#c1c1c1]">{id}</div>
                    </div>
                    <input
                        type="text"
                        value={nickname}
                        className="w-full ring-[#e2e2e2] p-3 ring-1 text-[#606060] rounded-xl focus:ring-2 focus:ring-inset focus:ring-[#6e3bff] focus:outline-none"
                        onChange={(event) => setNickname(event.target.value)}
                    />
                    <input
                        type="text"
                        value={phone}
                        className="w-full ring-[#e2e2e2] p-3 ring-1 text-[#606060] rounded-xl focus:ring-2 focus:ring-inset focus:ring-[#6e3bff] focus:outline-none"
                        onChange={(event) => setPhone(event.target.value)}
                    />
                    <input
                        type="text"
                        value={birth}
                        className="w-full ring-[#e2e2e2] p-3 ring-1 text-[#606060] rounded-xl focus:ring-2 focus:ring-inset focus:ring-[#6e3bff] focus:outline-none"
                        onChange={(event) => setBirth(event.target.value)}
                    />
                    <div className="flex w-full h-12 gap-2">
                        <div
                            className="flex items-center justify-center flex-1 gap-2 border-2 cursor-pointer rounded-xl"
                            style={{
                                borderColor:
                                    gender === "MALE" ? "#6E3BFF" : "#e2e2e2",
                            }}
                        >
                            <div
                                className="font-[Pretendard-SemiBold]"
                                style={{
                                    color:
                                        gender === "MALE"
                                            ? "#6E3BFF"
                                            : "#606060",
                                }}
                            >
                                남자
                            </div>
                        </div>
                        <div
                            className="flex items-center justify-center flex-1 gap-2 border-2 cursor-pointer rounded-xl"
                            style={{
                                borderColor:
                                    gender === "FEMALE" ? "#6E3BFF" : "#e2e2e2",
                            }}
                        >
                            <div
                                className="font-[Pretendard-SemiBold]"
                                style={{
                                    color:
                                        gender === "FEMALE"
                                            ? "#6E3BFF"
                                            : "#606060",
                                }}
                            >
                                여자
                            </div>
                        </div>
                    </div>
                    <button
                        className="w-full bg-[#6e3bff] text-center text-white p-3 rounded-xl font-[Pretendard-SemiBold]"
                        onClick={onLogout}
                    >
                        로그아웃
                    </button>
                    <div className="w-full h-[1px] border-b-[1px] border-b-[#d9d9d9] my-2"></div>
                    {coupleExist ? (
                        <button
                            className="w-full bg-[#f3f3f3] flex justify-center items-center text-[#6e3bff] p-3 rounded-xl font-[Pretendard-SemiBold]"
                            onClick={() => setDisConnect(true)}
                        >
                            커플 해지하기
                        </button>
                    ) : (
                        <Link
                            to={"/Palette-FE/coupleconnect"}
                            className="w-full bg-[#f3f3f3] flex justify-center items-center text-[#6e3bff] p-3 rounded-xl font-[Pretendard-SemiBold]"
                        >
                            커플 연동하기
                        </Link>
                    )}
                    <div
                        className="mt-3 cursor-pointer text-[#606060]"
                        onClick={() => setWithDraw(true)}
                    >
                        개인 회원 탈퇴
                    </div>
                </div>
            </div>
            <div
                className="absolute w-full h-[90dvh] bg-[#f3f3f3] opacity-50 z-10 "
                style={{
                    display: disconnect || withdraw ? "block" : "none",
                }}
            ></div>
            <div
                className="absolute z-20 gap-4 p-8 left-1/2 top-1/2 border-[1px] border-[#6e3bff] bg-white rounded-3xl flex-col"
                style={{
                    transform: "translate(-50%, -50%)",
                    display: disconnect ? "flex" : "none",
                }}
            >
                <div className="text-[#6e3bff] text-lg">
                    커플 해지하시겠습니까?
                </div>
                <div className="flex gap-4">
                    <div
                        className="p-4 bg-[#f3f3f3] text-[#606060] rounded-xl flex-1 text-center cursor-pointer"
                        onClick={() => setDisConnect(false)}
                    >
                        돌아가기
                    </div>
                    <div
                        className="p-4 bg-[#6e3bff] text-[#ffffff] rounded-xl flex-1 text-center cursor-pointer w-48"
                        onClick={onCoupleDisconnect}
                    >
                        해지하기
                    </div>
                </div>
            </div>
            <div
                className="absolute z-20 gap-4 p-8 left-1/2 top-1/2 border-[1px] border-[#6e3bff] bg-white rounded-3xl flex-col"
                style={{
                    transform: "translate(-50%, -50%)",
                    display: withdraw ? "flex" : "none",
                }}
            >
                <div className="text-[#6e3bff] text-lg">
                    회원 탈퇴하시겠습니까?
                </div>
                <div className="flex gap-4">
                    <div
                        className="p-4 bg-[#6e3bff] text-[#ffffff] rounded-xl flex-1 text-center cursor-pointer"
                        onClick={() => setWithDraw(false)}
                    >
                        돌아가기
                    </div>
                    <div
                        className="p-4 w-48 bg-[#f3f3f3] text-[#606060] rounded-xl flex-1 text-center cursor-pointer"
                        onClick={onClickWithDraw}
                    >
                        해지하기
                    </div>
                </div>
            </div>
        </div>
    );
}
