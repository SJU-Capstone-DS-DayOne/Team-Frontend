// import Category from "../components/inforComponent/Category";
// import InforCircleScroll from "../components/inforComponent/InforCircleScroll";
// import Place from "../components/inforComponent/MapComponent";

import { useEffect } from "react";
import RightSection from "../components/inforComponent/RightSection";
import { useStore } from "zustand";
import storeCategory from "../clients/CategoryState";
import storeInforLoading from "../clients/InforisLoading";
import style from "../styles/loading.module.css";

export default function Infor() {
    const { onClear } = useStore(storeCategory);
    const { loading } = useStore(storeInforLoading);

    useEffect(() => {
        onClear();
    }, []);

    return (
        <div className="flex relative items-center justify-center mt-[10dvh] h-[90dvh] w-dvw bg-[#f3f3f3]">
            {loading ? (
                <div className="flex flex-col flex-wrap items-center justify-center">
                    <div className={`${style.loader_6} ${style.loader}`}></div>
                    <div className="text-[#323232] font-[Pretendard-SemiBold] text-2xl mt-8">
                        AI가 추천 결과를 제공하고 있어요
                    </div>
                </div>
            ) : (
                <div className="flex flex-col p-8 bg-white rounded-3xl">
                    <div className="flex items-center font-[Pretendard-Bold] text-[#323232] text-xl ">
                        AI 기반 데이트코스 찾기
                    </div>

                    <RightSection />
                </div>
            )}
        </div>
    );
}
