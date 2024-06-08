export default function DetailReview() {
    return (
        <div className="w-full h-[66vh] bg-white border-t-[1px] overflow-hidden flex flex-col rounded-b-2xl">
            <div className="flex flex-col px-8">
                <div className="text-2xl font-bold text-[#323232] py-6">
                    전체 review page
                </div>
                <div className="flex items-center justify-center w-full h-full">
                    리뷰 전부를 보여주는데, 정렬 기준은 커플과 취향 비슷한
                    사람들의 순서로
                </div>
            </div>
        </div>
    );
}
// paging 화
