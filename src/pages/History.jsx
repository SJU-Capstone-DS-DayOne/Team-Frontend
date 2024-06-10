import { useEffect, useState } from "react";
import { getDateCourse } from "../apis/getDateCourse";
import { postDateCourseReview } from "../apis/postDateCourseReview";

export default function History() {
    const [data, setData] = useState([]);
    const [reviewArray, setReviewArray] = useState([false, false, false]);
    const [textareaValue, setTextareaValue] = useState(["", "", ""]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getDateCourse();
            setData(result);
        };

        fetchData();
    }, []);

    const handleChange = (event, idx) => {
        setTextareaValue((prevState) => {
            const newState = [...prevState];
            newState[idx] = event.target.value;
            return newState;
        });
    };

    const onClickReview = async (idx, index) => {
        const content = textareaValue[idx];
        const id =
            data[index].dateCourseRestaurantList[idx].dateCourseRestaurantId;

        const response = await postDateCourseReview(id, content);
        if (response) {
            const result = await getDateCourse();
            setData(result);

            setReviewArray((prevState) => {
                const newState = [...prevState];
                newState[idx] = false;
                return newState;
            });
        }
    };

    return (
        <div className="pl-24 bg-[#f3f3f3] h-[90dvh] overflow-x-scroll mt-[10dvh] py-10 flex gap-4">
            {data.map((value, index) => (
                <div
                    className="flex flex-col px-6 pt-8 bg-white rounded-3xl min-w-[400px] max-w-[400px] w-[400px] flex-grow"
                    key={index}
                >
                    <div className="w-full flex justify-between items-center pb-6 border-b-[1px]  border-b-[#d9d9d9] mb-6">
                        <div className="text-[#323232] font-[Pretendard-Bold] text-2xl">
                            {`${value.createdAt.slice(
                                2,
                                4
                            )}년 ${value.createdAt.slice(
                                5,
                                7
                            )}월 ${value.createdAt.slice(8, 10)}일`}
                        </div>
                        <div className="flex items-center gap-3">
                            <svg
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mb-[2px]"
                            >
                                <path
                                    d="M16.6813 8.80012C16.3719 5.64075 13.8469 3.07825 10.6937 2.73137C6.59375 2.27825 3.125 5.47512 3.125 9.48137C3.125 9.60012 3.125 9.71575 3.13437 9.83137C3.21562 11.4126 3.91875 12.9001 5.01562 14.0407L9.0875 18.2814C9.54063 18.7532 10.3 18.7532 10.7531 18.2814L14.8281 14.0376C15.8938 12.9282 16.5938 11.4939 16.7 9.95637C16.725 9.57825 16.7219 9.19075 16.6844 8.797L16.6813 8.80012ZM9.91875 10.6626C8.88438 10.6626 8.04375 9.822 8.04375 8.78762C8.04375 7.75325 8.88438 6.91262 9.91875 6.91262C10.9531 6.91262 11.7937 7.75325 11.7937 8.78762C11.7937 9.822 10.9531 10.6626 9.91875 10.6626Z"
                                    fill="#C1C1C1"
                                />
                            </svg>
                            <div className="text-[#c1c1c1] text-lg">
                                {
                                    value.dateCourseRestaurantList[0].restaurant
                                        .district
                                }
                            </div>
                        </div>
                    </div>

                    {value.dateCourseRestaurantList.map((val, idx) => (
                        <div className="flex flex-col w-full mb-6" key={idx}>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    {val.restaurant.type === "RST" ? (
                                        <svg
                                            width="45"
                                            height="45"
                                            viewBox="0 0 45 45"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="22.0823"
                                                cy="22.0823"
                                                r="22.0823"
                                                fill="#6E3BFF"
                                            />
                                            <g clipPath="url(#clip0_521_3902)">
                                                <g clipPath="url(#clip1_521_3902)">
                                                    <path
                                                        d="M31.9574 20.3088L30.7567 14.0683C30.4278 12.1131 29.1626 10.2108 27.3684 9.36428C26.4277 8.92034 25.3465 9.60351 25.3419 10.6432L25.2246 32.9348C25.2223 33.5306 25.4662 34.1034 25.9009 34.5105L25.9561 34.5634C26.7819 35.3363 28.0654 35.3363 28.8889 34.5634C29.3559 34.1241 29.6043 33.5007 29.5629 32.8589L29.0499 24.976C29.0131 24.4148 29.372 23.9018 29.9125 23.7431C31.3893 23.3106 32.2841 21.8109 31.9574 20.3042V20.3088Z"
                                                        fill="white"
                                                    />
                                                    <path
                                                        d="M21.1708 9.20117C20.6118 9.20117 20.1586 9.65432 20.1586 10.2133V16.026C20.1586 16.5918 19.7009 17.0496 19.135 17.0496C18.5692 17.0496 18.1114 16.5918 18.1114 16.026V10.2133C18.1114 9.65432 17.6583 9.20117 17.0993 9.20117H17.0717C16.5128 9.20117 16.0596 9.65432 16.0596 10.2133V16.026C16.0596 16.5918 15.6019 17.0496 15.036 17.0496C14.4702 17.0496 14.0124 16.5918 14.0124 16.026V10.2133C14.0124 9.65432 13.5593 9.20117 13.0003 9.20117H12.9727C12.416 9.20117 11.9629 9.65432 11.9629 10.2133V17.8156C11.9629 20.0537 13.0187 22.1607 14.8129 23.4995L14.9877 23.6306C15.3143 23.8744 15.4938 24.2654 15.4685 24.6726L14.9394 32.7947C14.9003 33.3997 15.0843 34.0093 15.4938 34.4555C16.3471 35.3825 17.8009 35.3825 18.6543 34.4555C19.0637 34.0093 19.2478 33.3997 19.2086 32.7947L18.6796 24.6726C18.652 24.2654 18.8337 23.8744 19.1603 23.6306L19.3352 23.4995C21.1293 22.1607 22.1852 20.0537 22.1852 17.8156V10.2133C22.1852 9.65432 21.732 9.20117 21.1731 9.20117H21.1708Z"
                                                        fill="white"
                                                    />
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_521_3902">
                                                    <rect
                                                        width="33.1235"
                                                        height="33.1235"
                                                        fill="white"
                                                        transform="translate(5.52051 5.52051)"
                                                    />
                                                </clipPath>
                                                <clipPath id="clip1_521_3902">
                                                    <rect
                                                        width="33.1235"
                                                        height="33.1235"
                                                        fill="white"
                                                        transform="translate(5.52051 5.52051)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    ) : val.restaurant.type === "CAFE" ? (
                                        <svg
                                            width="45"
                                            height="45"
                                            viewBox="0 0 45 45"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="22.0823"
                                                cy="22.0823"
                                                r="22.0823"
                                                fill="#6E3BFF"
                                            />
                                            <path
                                                d="M30.1468 30.8184H12.7409C12.1842 30.8184 11.7334 31.2692 11.7334 31.8259C11.7334 32.3825 12.1842 32.8334 12.7409 32.8334H30.1491C30.7058 32.8334 31.1566 32.3825 31.1566 31.8259C31.1566 31.2692 30.7058 30.8184 30.1491 30.8184H30.1468Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M30.8031 13.0996H29.9221L29.9336 12.6649C29.9497 12.0277 29.4391 11.501 28.7996 11.501H13.6295C12.99 11.501 12.4794 12.0277 12.4955 12.6649L12.7071 20.7134C12.829 25.3254 16.6014 29.0012 21.2157 29.0012C25.4918 29.0012 29.0434 25.843 29.6369 21.7094H30.8054C33.1838 21.7094 35.1115 19.7818 35.1115 17.4034C35.1115 15.0249 33.1838 13.0973 30.8054 13.0973L30.8031 13.0996ZM30.8031 19.6254H29.7496L29.8669 15.186H30.8031C32.0268 15.186 33.0228 16.182 33.0228 17.4057C33.0228 18.6294 32.0268 19.6254 30.8031 19.6254Z"
                                                fill="white"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            width="45"
                                            height="45"
                                            viewBox="0 0 45 45"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="22.0823"
                                                cy="22.0823"
                                                r="22.0823"
                                                fill="#6E3BFF"
                                            />
                                            <path
                                                d="M30.4084 18.6224L29.7025 11.9147C29.62 11.1332 28.9623 10.542 28.1763 10.542H15.7967C15.0129 10.542 14.3529 11.1355 14.2704 11.9147L13.5669 18.6224C13.0765 23.2837 16.4521 27.3834 20.985 27.9151V30.5872L17.7652 31.3114C17.2565 31.4259 16.8967 31.8774 16.8967 32.3976C16.8967 33.0141 17.3963 33.5114 18.0104 33.5114H25.9648C26.5813 33.5114 27.0786 33.0118 27.0786 32.3976C27.0786 31.8774 26.7165 31.4259 26.21 31.3114L22.9902 30.5872V27.9151C27.5232 27.3812 30.8988 23.2837 30.4084 18.6224Z"
                                                fill="white"
                                            />
                                        </svg>
                                    )}
                                    <div className="flex flex-col">
                                        <div className="text-[#323232] font-[Pretendard-Bold] text-xl">
                                            {val.restaurant.name}
                                        </div>
                                        <div className="text-[#7f7f7f] text-[15px]">
                                            {val.restaurant.address}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 p-4 rounded-2xl border-[1px] border-[#c1c1c1]">
                                    {val.review ? (
                                        <div className="flex items-center gap-3">
                                            <div className="text-sm text-[#c1c1c1]"></div>
                                            <div className="text-[#606060] text-[15px]">
                                                {val.review.content}
                                            </div>
                                        </div>
                                    ) : reviewArray[idx] ? (
                                        <div className="flex flex-col gap-3">
                                            <textarea
                                                type="text"
                                                className="p-3 h-20 bg-[#f3f3f3] flex resize-none ring-1 ring-inset ring-[#e2e2e2] focus:ring-2 focus:ring-inset focus:ring-[#6e3bff] focus:outline-none"
                                                placeholder="내용을 입력해주세요."
                                                value={textareaValue[idx]}
                                                onChange={(event) =>
                                                    handleChange(event, idx)
                                                }
                                            />
                                            <div className="flex items-center justify-between">
                                                <div className="text-[#C1C1C1] text-sm">{`${textareaValue[idx].length} / 200`}</div>
                                                <div
                                                    className="text-sm text-[#6E3BFF] cursor-pointer"
                                                    onClick={() =>
                                                        onClickReview(
                                                            idx,
                                                            index
                                                        )
                                                    }
                                                >
                                                    완료
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-between w-full">
                                            <div className="text-sm text-[#7f7f7f]">
                                                이 가게의 기억을 리뷰로
                                                남겨보세요!
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <div
                                                    className="cursor-pointer text-[#6e3bff] text-base"
                                                    onClick={() =>
                                                        setReviewArray(
                                                            (prevState) => {
                                                                const newState =
                                                                    [
                                                                        ...prevState,
                                                                    ];
                                                                newState[
                                                                    idx
                                                                ] = true;
                                                                return newState;
                                                            }
                                                        )
                                                    }
                                                >
                                                    리뷰쓰기
                                                </div>
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M13.287 3.2071C13.6776 2.81658 14.3107 2.81658 14.7013 3.2071L16.7927 5.29845C17.1832 5.68897 17.1832 6.32213 16.7927 6.71265L15.4024 8.1029C15.0119 8.49342 14.3787 8.49342 13.9882 8.1029L11.8967 6.01154C11.5062 5.62102 11.5062 4.98786 11.8967 4.59734L13.287 3.2071Z"
                                                        fill="#6E3BFF"
                                                    />
                                                    <path
                                                        d="M9.48917 7.00495C9.8797 6.61443 10.5129 6.61443 10.9034 7.00495L12.9949 9.09637C13.3854 9.48689 13.3854 10.12 12.9949 10.5106L6.65813 16.8472C6.42546 17.0798 6.12914 17.2384 5.80651 17.3029L3.3899 17.7863C2.69014 17.9263 2.07318 17.3093 2.21318 16.6096L2.69663 14.1931C2.76117 13.8705 2.91976 13.5742 3.15241 13.3416L9.48917 7.00495Z"
                                                        fill="#6E3BFF"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
