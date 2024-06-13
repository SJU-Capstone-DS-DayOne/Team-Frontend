import { useEffect, useState } from "react";
import LandingRecommend from "./LandingRecommend";
import { Link, useNavigate } from "react-router-dom";
// import { getName } from "../../apis/getName";
import { isCouple } from "../../apis/isCouple";
import { useStore } from "zustand";
import storeCoupleExist from "../../clients/CoupleExist";

export default function LandingMain() {
    const [access, setAccess] = useState();
    const [coupleConnect, setCoupleConnect] = useState(false);
    const { coupleExist, setCoupleExist } = useStore(storeCoupleExist);
    const navi = useNavigate();

    useEffect(() => {
        setAccess(localStorage.getItem("access"));
    }, []);

    useEffect(() => {
        const isCouples = async () => {
            if (access) {
                const res = await isCouple();
                setCoupleExist(res);
            }
        };

        isCouples();
    }, [access]);

    const onClickRecommend = () => {
        if (!access) navi("/login");
        else if (coupleExist) navi("/infor");
        else setCoupleConnect(true);
    };
    const onClickBack = () => {
        setCoupleConnect(false);
    };

    return (
        <>
            <div
                className="absolute z-20 flex bg-white opacity-50 w-dvw h-dvh"
                style={{
                    display: coupleConnect ? "block" : "none",
                }}
            ></div>
            <div
                className="p-8  flex-col gap-4 border-[1px] border-[#6e3bff] bg-white rounded-3xl absolute top-1/2 left-1/2 z-30"
                style={{
                    transform: "translate(-50%, -50%)",
                    display: coupleConnect ? "flex" : "none",
                }}
            >
                <div className="text-[#6e3bff]">
                    서비스 이용을 위해서는 커플 연동이 필요합니다!
                </div>
                <div className="flex gap-4">
                    <div
                        className="px-4 py-3 bg-[#f3f3f3] text-[#606060] rounded-xl flex-1 text-center cursor-pointer"
                        onClick={onClickBack}
                    >
                        돌아가기
                    </div>
                    <Link
                        to={"/coupleconnect"}
                        className="px-4 py-3 bg-[#6e3bff] text-[#ffffff] rounded-xl flex-1 text-center cursor-pointer"
                    >
                        연동하기
                    </Link>
                </div>
            </div>
            <div className="flex flex-col w-full h-[90dvh] mt-[10dvh] justify-around">
                <div className="flex flex-col items-center w-full h-[45%] relative ">
                    <div className="text-xl text-[#606060] mt-10 mb-3">
                        너와 내가 그리는 데이트 코스
                    </div>
                    <div className="text-8xl text-[#6E3BFF] font-[Pretendard-ExtraBold]">
                        Palette
                    </div>

                    <div
                        className="flex items-center gap-2 px-7 py-3 mt-10 bg-[#6e3bff] rounded-3xl text-lg cursor-pointer"
                        style={{
                            backgroundColor: access ? "#6e3bff" : "#ffffff",
                            outline: !access ? "1px solid #6e3bff" : null,
                            color: !access ? "#6e3bff" : "#ffffff",
                        }}
                        onClick={onClickRecommend}
                    >
                        추천 받으러 가기
                        <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 7.5L11 7.5"
                                stroke={access ? "white" : "#6e3bff"}
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <path
                                d="M7 1.5L13 7.5L7 13.5"
                                stroke={access ? "white" : "#6e3bff"}
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                <div className="flex flex-col mx-24 mb-6 py-4 h-[50%] bg-[#f3f3f3] px-6 rounded-3xl">
                    <div className="font-[Pretendard-Bold] text-xl text-[#606060] mb-4">
                        이런 식당은 어떠세요?
                    </div>
                    <LandingRecommend />
                </div>
            </div>
        </>
    );
}
