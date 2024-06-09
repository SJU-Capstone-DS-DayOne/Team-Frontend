import { useStore } from "zustand";
import storeDetailInfor from "../../clients/DetailInfor";
import storeDetailReview from "../../clients/DetailReview.js";
import storeReviewPagination from "../../clients/ReviewPagination.js";

export default function DetailMenu() {
    const { detailInfor } = useStore(storeDetailInfor);
    const { detailReview } = useStore(storeDetailReview);
    console.log(detailReview);
    const { currentPage, totalPage, nextPage, prevPage } = useStore(
        storeReviewPagination
    );
    console.log(typeof currentPage);

    const sortedMenu = detailInfor.menuResponseList
        .sort((a, b) => {
            if (a.ranking === null) return 1;
            if (b.ranking === null) return -1;
            return a.ranking - b.ranking;
        })
        .slice(0, 9);

    return (
        <div className="flex w-full gap-4 mt-4">
            <div className="flex flex-1 bg-white w-full h-[76dvh] rounded-2xl flex-col py-4">
                <div className="px-6 pb-4 text-[#323232] font-[Pretendard-Bold] text-xl border-b-[1px] border-b-[#e2e2e2]">
                    메뉴
                </div>

                {sortedMenu.map((val, idx) => (
                    <div
                        className="flex items-center justify-between w-full px-6 border-b-[1px] border-b-[#e2e2e2] py-4"
                        key={idx}
                    >
                        <div className="text-[#323232] font-[Pretendard-SemiBold]">
                            {val.name}
                        </div>
                        <div className="text-[#6e3bff] text-lg">
                            {`${val.price}원`}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-1 bg-white w-full h-[76dvh] rounded-2xl flex-col py-4">
                <div className="flex items-center justify-between border-b-[1px] border-b-[#e2e2e2] pl-6 pr-4 pb-4 ">
                    <div className="flex gap-2">
                        <div className="text-[#323232] font-[Pretendard-Bold] text-xl ">
                            리뷰
                        </div>
                        <div className="cursor"></div>
                    </div>
                    <div className="text-[#e2e2e2] flex items-center gap-1">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="cursor-pointer"
                            style={{
                                pointerEvents:
                                    currentPage === 1 ? "none" : "auto",
                            }}
                            onClick={prevPage}
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16.2655 4.17561C16.7208 4.59839 16.7472 5.31021 16.3244 5.76551L10.5352 12L16.3244 18.2345C16.7472 18.6898 16.7208 19.4016 16.2655 19.8244C15.8102 20.2472 15.0984 20.2208 14.6756 19.7655L8.17561 12.7655C7.7748 12.3339 7.7748 11.6661 8.17561 11.2345L14.6756 4.2345C15.0984 3.7792 15.8102 3.75283 16.2655 4.17561Z"
                                fill={currentPage === 1 ? "#c1c1c1" : "#6e3bff"}
                            />
                        </svg>
                        <div className="text-[#c1c1c1] mr-[2px]">
                            {currentPage}
                        </div>
                        / {totalPage}
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                                pointerEvents:
                                    currentPage === 4 ? "none" : "auto",
                            }}
                            onClick={nextPage}
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.73449 4.17561C7.27919 4.59839 7.25283 5.31021 7.67561 5.76551L13.4648 12L7.67561 18.2345C7.25283 18.6898 7.27919 19.4016 7.73449 19.8244C8.18979 20.2472 8.90161 20.2208 9.32439 19.7655L15.8244 12.7655C16.2252 12.3339 16.2252 11.6661 15.8244 11.2345L9.32439 4.2345C8.90161 3.7792 8.18979 3.75283 7.73449 4.17561Z"
                                fill={currentPage === 4 ? "#c1c1c1" : "#6e3bff"}
                            />
                        </svg>
                    </div>
                </div>
                {detailReview[currentPage - 1]?.map((item, idx) => (
                    <div
                        className="py-4 border-b-[1px] border-b-[#e2e2e2] flex flex-col gap-2 w-full px-6"
                        key={idx}
                    >
                        <div className="flex justify-between">
                            <div className="text-[#323232] font-[Pretendard-SemiBold]">
                                {item.member.nickname}
                            </div>
                            <div className="text-[#c1c1c1] text-md items-center">
                                {item.created_at.slice(0, 10)}
                            </div>
                        </div>
                        <div className="text-[#7f7f7f] text-sm">
                            {item.content.length >= 100
                                ? `${item.content.slice(0, 100)}…`
                                : item.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
