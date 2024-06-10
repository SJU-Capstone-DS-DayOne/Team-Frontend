import { useStore } from "zustand";
import RecommendColdstart from "../components/coldstartComponent/RecommendColdstart";
import storeLoading from "../clients/isLoading";

export default function ColdStart() {
    const { loading } = useStore(storeLoading);
    return (
        <div
            className="flex flex-col w-full overflow-scroll mt-[10dvh] items-center justify-center "
            style={{
                justifyContent: loading ? "center" : "start",
                height: loading ? "90dvh" : null,
            }}
        >
            {!loading ? (
                <>
                    <div className="text-[#6e3bff] font-[Pretendard-Bold] mt-10 text-3xl">
                        당신의 팔레트를 채워주세요!
                    </div>
                    <div className="text-[#323232] mt-5 text-lg mb-10">
                        마음에 드는 장소를 선택해주세요
                    </div>
                    <RecommendColdstart />
                </>
            ) : (
                <>
                    <RecommendColdstart />
                    <div className="text-[#323232] font-[Pretendard-SemiBold] text-2xl mt-8">
                        AI가 추천 결과를 제공하고 있어요
                    </div>
                </>
            )}
        </div>
    );
}
