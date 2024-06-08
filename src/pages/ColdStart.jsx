import RecommendColdstart from "../components/coldstartComponent/RecommendColdstart";

export default function ColdStart() {
    return (
        <div className="flex flex-col w-full overflow-scroll mt-[10dvh] items-center">
            <div className="text-[#6e3bff] font-[Pretendard-Bold] mt-10 text-3xl">
                회원가입 완료!
            </div>
            <div className="text-[#323232] mt-5 text-lg mb-10">
                주로 선호하는 메뉴를 5개 선택해주세요!
            </div>
            <RecommendColdstart />
        </div>
    );
}
