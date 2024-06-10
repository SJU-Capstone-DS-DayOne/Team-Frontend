import { useStore } from "zustand";
import storeDetailInfor from "../../clients/DetailInfor";
import storeDetailReview from "../../clients/DetailReview.js";
import storeReviewPagination from "../../clients/ReviewPagination.js";
import { useState } from "react";

export default function DetailMenu() {
    const [reviews, setReivews] = useState(true);
    const [arrow, setArrow] = useState(false);
    const { detailInfor } = useStore(storeDetailInfor);
    const { detailReview, sortDetailReview } = useStore(storeDetailReview);
    const { currentPage, totalPage, nextPage, prevPage } = useStore(
        storeReviewPagination
    );

    const sortedMenu = detailInfor.menuResponseList
        .sort((a, b) => {
            if (a.ranking === null) return 1;
            if (b.ranking === null) return -1;
            return a.ranking - b.ranking;
        })
        .slice(0, 9);

    const onClickRecent = () => {
        setReivews(true);
        setArrow(false);
    };

    const onClickRecommend = () => {
        setReivews(false);
        setArrow(false);
    };
    return (
        <div className="flex w-full max-h-full gap-4 mt-4 overflow-hidden">
            <div className="flex flex-1 bg-white w-full h-[76dvh] rounded-2xl flex-col py-4">
                <div className="flex justify-between items-center px-6 pb-4 text-[#323232] border-b-[1px] border-b-[#e2e2e2]">
                    <div className="font-[Pretendard-Bold] text-xl">메뉴</div>
                    <div className="flex items-center gap-1">
                        <svg
                            width="24"
                            height="25"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8.00031 13.3001L4.30031 16.1251C4.11697 16.2751 3.91697 16.3461 3.70031 16.3381C3.48364 16.3301 3.29197 16.2674 3.12531 16.1501C2.95864 16.0328 2.82964 15.8744 2.73831 15.6751C2.64697 15.4758 2.64264 15.2591 2.72531 15.0251L4.15031 10.4001L0.525307 7.8251C0.325307 7.69177 0.200307 7.51677 0.150307 7.3001C0.100307 7.08344 0.10864 6.88344 0.175307 6.7001C0.241974 6.51677 0.35864 6.3541 0.525307 6.2121C0.691974 6.0701 0.891974 5.99944 1.12531 6.0001H5.60031L7.05031 1.2001C7.13364 0.96677 7.26297 0.787436 7.43831 0.662103C7.61364 0.53677 7.80097 0.474436 8.00031 0.475103C8.19964 0.47577 8.38731 0.538436 8.56331 0.663103C8.73931 0.78777 8.86831 0.96677 8.95031 1.2001L10.4003 6.0001H14.8753C15.1086 6.0001 15.3086 6.0711 15.4753 6.2131C15.642 6.3551 15.7586 6.51744 15.8253 6.7001C15.892 6.88277 15.9003 7.08277 15.8503 7.3001C15.8003 7.51744 15.6753 7.69244 15.4753 7.8251L11.8503 10.4001L13.2753 15.0251C13.3586 15.2584 13.3546 15.4751 13.2633 15.6751C13.172 15.8751 13.0426 16.0334 12.8753 16.1501C12.708 16.2668 12.5163 16.3294 12.3003 16.3381C12.0843 16.3468 11.8843 16.2758 11.7003 16.1251L8.00031 13.3001Z"
                                fill="#6E3BFF"
                            />
                        </svg>
                        <svg
                            width="29"
                            height="3"
                            viewBox="0 0 29 3"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M29 1.5H0"
                                stroke="#6E3BFF"
                                strokeOpacity="0.5"
                                strokeWidth="2"
                                strokeDasharray="4 4"
                            />
                        </svg>

                        <div className="text-sm text-[#6e3bff] font-[Pretendard-SemiBold]">
                            Palette Pick!
                        </div>
                    </div>
                </div>

                {sortedMenu.map((val, idx) => (
                    <div
                        className="flex items-center justify-between w-full px-6 border-b-[1px] border-b-[#e2e2e2] py-4"
                        key={idx}
                    >
                        <div className="flex items-center gap-2">
                            <div className="text-[#323232] font-[Pretendard-SemiBold]">
                                {val.name}
                            </div>

                            {idx <= 2 && (
                                <svg
                                    width="16"
                                    height="17"
                                    viewBox="0 0 16 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.00031 13.3001L4.30031 16.1251C4.11697 16.2751 3.91697 16.3461 3.70031 16.3381C3.48364 16.3301 3.29197 16.2674 3.12531 16.1501C2.95864 16.0328 2.82964 15.8744 2.73831 15.6751C2.64697 15.4758 2.64264 15.2591 2.72531 15.0251L4.15031 10.4001L0.525307 7.8251C0.325307 7.69177 0.200307 7.51677 0.150307 7.3001C0.100307 7.08344 0.10864 6.88344 0.175307 6.7001C0.241974 6.51677 0.35864 6.3541 0.525307 6.2121C0.691974 6.0701 0.891974 5.99944 1.12531 6.0001H5.60031L7.05031 1.2001C7.13364 0.96677 7.26297 0.787436 7.43831 0.662103C7.61364 0.53677 7.80097 0.474436 8.00031 0.475103C8.19964 0.47577 8.38731 0.538436 8.56331 0.663103C8.73931 0.78777 8.86831 0.96677 8.95031 1.2001L10.4003 6.0001H14.8753C15.1086 6.0001 15.3086 6.0711 15.4753 6.2131C15.642 6.3551 15.7586 6.51744 15.8253 6.7001C15.892 6.88277 15.9003 7.08277 15.8503 7.3001C15.8003 7.51744 15.6753 7.69244 15.4753 7.8251L11.8503 10.4001L13.2753 15.0251C13.3586 15.2584 13.3546 15.4751 13.2633 15.6751C13.172 15.8751 13.0426 16.0334 12.8753 16.1501C12.708 16.2668 12.5163 16.3294 12.3003 16.3381C12.0843 16.3468 11.8843 16.2758 11.7003 16.1251L8.00031 13.3001Z"
                                        fill="#6E3BFF"
                                    />
                                </svg>
                            )}
                        </div>

                        <div className="text-[#6e3bff] text-lg">
                            {`${val.price}원`}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-1 bg-white w-full h-[76dvh] rounded-2xl flex-col py-4">
                <div className="flex items-center justify-between border-b-[1px] border-b-[#e2e2e2] pl-6 pr-4 pb-4 ">
                    <div className="flex items-center gap-3">
                        <div className="text-[#323232] font-[Pretendard-Bold] text-xl">
                            리뷰
                        </div>
                        <div className="flex items-center gap-0.5 relative">
                            <div
                                className="text-[#6e3bff] cursor-pointer"
                                onClick={() => setArrow(!arrow)}
                            >
                                {reviews ? "최근순" : "유사도순"}
                            </div>
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="cursor-pointer"
                                onClick={() => setArrow(!arrow)}
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M2.78439 5.15633C3.06624 4.8528 3.54079 4.83522 3.84433 5.11707L8.00065 8.97652L12.157 5.11707C12.4605 4.83522 12.9351 4.85279 13.2169 5.15633C13.4988 5.45986 13.4812 5.93441 13.1777 6.21626L8.51099 10.5496C8.22323 10.8168 7.77808 10.8168 7.49032 10.5496L2.82365 6.21626C2.52012 5.93441 2.50254 5.45986 2.78439 5.15633Z"
                                    fill="#6E3BFF"
                                />
                            </svg>
                            {arrow && (
                                <div className="bg-white absolute top-7 left-0 rounded-lg border-[1px] border-[#c1c1c1] py-1 px-2 flex flex-col w-20">
                                    <div
                                        className="border-b-[1px] border-b-[#e2e2e2] py-1 text-[#606060] cursor-pointer text-center"
                                        onClick={onClickRecent}
                                    >
                                        최근순
                                    </div>
                                    <div
                                        className="py-1 text-[#606060] cursor-pointer text-center"
                                        onClick={onClickRecommend}
                                    >
                                        유사도순
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="text-[#606060] flex items-center gap-1">
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
                        <div className=" mr-[2px]">{currentPage}</div>/{" "}
                        {totalPage}
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
                {reviews
                    ? detailReview[currentPage - 1]?.map((item, idx) => (
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
                      ))
                    : sortDetailReview[currentPage - 1]?.map((item, idx) => (
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
