// import Category from "../components/inforComponent/Category";
// import InforCircleScroll from "../components/inforComponent/InforCircleScroll";
// import Place from "../components/inforComponent/MapComponent";

import { useEffect } from "react";
import RightSection from "../components/inforComponent/RightSection";
import { useStore } from "zustand";
import storeCategory from "../clients/CategoryState";

export default function Infor() {
    const { onClear } = useStore(storeCategory);

    useEffect(() => {
        onClear();
    }, []);

    return (
        <div className="flex relative items-center justify-center mt-[10dvh] h-[90dvh] w-dvw bg-[#f3f3f3]">
            <div
                className="flex flex-col p-8 bg-white rounded-3xl"
                style={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
            >
                <div className="flex items-center font-[Pretendard-Bold] text-[#323232] text-xl ">
                    데이트 코스 찾기
                </div>

                <RightSection />
            </div>
        </div>
    );
}
