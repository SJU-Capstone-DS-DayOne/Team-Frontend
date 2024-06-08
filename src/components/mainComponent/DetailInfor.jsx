import { useStore } from "zustand";
import DetailImage from "./DetailImage.jsx";
import storeDetailInfor from "../../clients/DetailInfor.js";

export default function DetailInfor() {
    const { detailInfor } = useStore(storeDetailInfor);

    return (
        <div className="flex flex-col items-center ">
            <DetailImage />
            <div className="flex justify-between w-full gap-4">
                <div className="flex flex-1 h-[44dvh] bg-white rounded-2xl flex-col py-4">
                    <div className="px-6 pb-4 text-[#323232] font-[Pretendard-Bold] text-xl border-b-[1px] border-b-[#e2e2e2]">
                        가게 정보
                    </div>
                    <div className="flex flex-col gap-4 pt-4 pl-6">
                        <div className="flex gap-2">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mt-[2px]"
                            >
                                <path
                                    d="M20.0175 9.95995C19.6463 6.1687 16.6163 3.0937 12.8325 2.67745C7.9125 2.1337 3.75 5.96995 3.75 10.7775C3.75 10.92 3.75 11.0587 3.76125 11.1975C3.85875 13.095 4.7025 14.88 6.01875 16.2487L10.905 21.3375C11.4488 21.9037 12.36 21.9037 12.9037 21.3375L17.7938 16.245C19.0725 14.9137 19.9125 13.1925 20.04 11.3475C20.07 10.8937 20.0662 10.4287 20.0212 9.9562L20.0175 9.95995ZM11.9025 12.195C10.6613 12.195 9.6525 11.1862 9.6525 9.94495C9.6525 8.7037 10.6613 7.69495 11.9025 7.69495C13.1438 7.69495 14.1525 8.7037 14.1525 9.94495C14.1525 11.1862 13.1438 12.195 11.9025 12.195Z"
                                    fill="#606060"
                                />
                            </svg>
                            <div className="flex flex-col justify-center gap-1">
                                <div className="text-[#323232]">
                                    {detailInfor.address}
                                </div>
                                {/* {detailInfor.distFromStation ?? (
                                    <div className="text-[#323232] text-base">1</div>
                                )} 
                                코드를 split(" ")로 나누고 index가 홀수면 #6e3bff  짝수면 #606060*/}
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14.3967 12.6357L13.5679 13.4644C13.0467 13.9857 12.2029 13.9857 11.6854 13.4644L10.8379 12.6169L9.9904 11.7694C9.46915 11.2482 9.46915 10.4044 9.9904 9.8869L10.8192 9.05815C11.2617 8.61565 11.2617 7.89565 10.8192 7.45315L7.81915 4.4569C7.4329 4.07065 6.8254 4.0144 6.3754 4.32565L4.9954 5.27065C4.2004 5.8144 3.9079 6.8494 4.29415 7.73065C6.53665 12.8344 10.6129 16.9107 15.7167 19.1532C16.5979 19.5394 17.6329 19.2469 18.1804 18.4519L19.1254 17.0719C19.4329 16.6219 19.3767 16.0144 18.9942 15.6282L15.9979 12.6319C15.5554 12.1894 14.8354 12.1894 14.3929 12.6319L14.3967 12.6357Z"
                                    fill="#606060"
                                />
                            </svg>
                            <div className="text-[#323232]">
                                {detailInfor.phone}
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.9025 4.125C7.39875 4.125 3.75 7.77375 3.75 12.2775C3.75 16.7812 7.39875 20.43 11.9025 20.43C16.4062 20.43 20.055 16.7812 20.055 12.2775C20.055 7.77375 16.4062 4.125 11.9025 4.125ZM14.8238 14.5087C14.7113 14.655 14.5463 14.73 14.3775 14.73C14.2575 14.73 14.1375 14.6925 14.0363 14.6137L11.5612 12.7238C11.4225 12.6188 11.34 12.4538 11.34 12.2775V8.11125C11.34 7.8 11.5912 7.54875 11.9025 7.54875C12.2137 7.54875 12.465 7.8 12.465 8.11125V12L14.7188 13.7213C14.9663 13.9088 15.015 14.2612 14.8238 14.5087Z"
                                    fill="#606060"
                                />
                            </svg>
                            <div className="text-[#323232]">
                                {detailInfor.openingHours
                                    .split("\n")
                                    .map((val, idx) => (
                                        <p key={idx}>{val}</p>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 h-[44dvh] bg-white rounded-2xl flex-col py-4">
                    <div className="px-6 pb-4 text-[#323232] font-[Pretendard-Bold] text-xl border-b-[1px] border-b-[#e2e2e2]">
                        AI 리뷰요약
                    </div>
                    <div className="flex flex-col pt-4 pl-6 pr-10">
                        <div className="flex items-center gap-2">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8 0C3.58258 0 0 3.58258 0 8C0 12.4174 3.58258 16 8 16C12.4174 16 16 12.4174 16 8C16 3.58258 12.4174 0 8 0ZM2.99534 6.43112C2.99534 5.82197 3.49055 5.32676 4.0997 5.32676C4.70885 5.32676 5.20405 5.82197 5.20405 6.43112C5.20405 7.04026 4.70885 7.53547 4.0997 7.53547C3.49055 7.53547 2.99534 7.04026 2.99534 6.43112ZM11.2057 10.7828C10.2175 11.576 9.06491 11.9704 7.93426 11.9704C6.80362 11.9704 5.67297 11.5672 4.76582 10.7609C4.49411 10.5199 4.47001 10.1035 4.71104 9.83183C4.95207 9.56012 5.36839 9.53602 5.6401 9.77705C6.957 10.9471 8.90715 10.9384 10.384 9.75514C10.6667 9.52725 11.0808 9.57327 11.3087 9.85593C11.5366 10.1386 11.4906 10.5527 11.2079 10.7806L11.2057 10.7828ZM11.9003 7.53547C11.2912 7.53547 10.7959 7.04026 10.7959 6.43112C10.7959 5.82197 11.2912 5.32676 11.9003 5.32676C12.5094 5.32676 13.0047 5.82197 13.0047 6.43112C13.0047 7.04026 12.5094 7.53547 11.9003 7.53547Z"
                                    fill="#6E3BFF"
                                />
                            </svg>
                            <div className="text-[#6e3bff] text-lg font-[Pretendard-SemiBold]">
                                Good 리뷰
                            </div>
                        </div>
                        <div className="text-[#323232] ">
                            {detailInfor.summary}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/*대표 사진 hover grayscale + center에 대표메뉴 명 + 나머지 퍼블리싱 완료하기.*/
// reviewsummerizaion -> 전체 다 보여주기
