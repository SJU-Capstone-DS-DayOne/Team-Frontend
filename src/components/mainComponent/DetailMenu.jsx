import { useStore } from "zustand";
import storeDetailInfor from "../../clients/DetailInfor";
import storeDetailReview from "../../clients/DetailReview.js";

export default function DetailMenu() {
    const { detailInfor } = useStore(storeDetailInfor);
    const { detailReview } = useStore(storeDetailReview);

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
                <div className="px-6 pb-4 text-[#323232] font-[Pretendard-Bold] text-xl border-b-[1px] border-b-[#e2e2e2]">
                    리뷰
                </div>
                {detailReview.map((value, index) => (
                    <div
                        className="py-4 border-b-[1px] border-b-[#e2e2e2] flex flex-col gap-2 w-full px-6"
                        key={index}
                    >
                        <div className="flex justify-between">
                            <div className="text-[#323232] font-[Pretendard-SemiBold]">
                                {value.member.nickname}
                            </div>
                            <div className="text-[#c1c1c1] text-md items-center">
                                {value.created_at.slice(0, 10)}
                            </div>
                        </div>
                        <div className="text-[#7f7f7f] text-sm">
                            {value.content}
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className="flex flex-col w-full h-full px-8">
                <div className="text-2xl font-bold text-[#323232] py-6">
                    메뉴
                </div>

                <div className="flex flex-wrap w-full">
                    {menuInfor.map((val, idx) => (
                        <div
                            className={`w-${
                                menuInfor.length >= 7 ? "1/2" : "full"
                            } border-t-[1px] items-center py-1 flex justify-between`}
                            key={idx}
                            style={{
                                width: menuInfor.length >= 7 ? "50%" : "100%",
                            }}
                        >
                            <div>
                                <div className="text-xl font-semibold text-[#323232]">
                                    {val[0]}
                                </div>
                                <div className="text-md font-semibold text-[#2c87f1]">
                                    {val[1].toLocaleString("ko-KR") + "원"}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    );
}
{
    /* {idx <= 2 ? (
                                <img
                                    src={Image}
                                    className="mr-2 size-12"
                                    alt="1"
                                />
                            ) : null} */
}
