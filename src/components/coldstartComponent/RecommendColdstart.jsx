import { useEffect, useRef, useState } from "react";
import { useStore } from "zustand";
import storeColdStartInfor from "../../clients/ColdStartInfor";
import { useNavigate } from "react-router-dom";
import { postColdStart } from "../../apis/postColdStart";
import { getName } from "../../apis/getName";
import storeDepositUserInfor from "../../clients/DepositUserInfor";
import style from "../../styles/loading.module.css";
import storeLoading from "../../clients/isLoading";
import storeClickInfor from "../../clients/ClickInfor";

export default function RecommendColdstart() {
    const [idList, setIdList] = useState([]);
    const [parentWidth, setParentWidth] = useState(0);
    const { loading, setLoading } = useStore(storeLoading);
    const parentRef = useRef(null);
    const { infor } = useStore(storeColdStartInfor);
    const { setId, setNickname, setMemberId, setGender, setPhone, setBirth } =
        useStore(storeDepositUserInfor);

    const { setNoClick } = useStore(storeClickInfor);

    const navi = useNavigate();

    useEffect(() => {
        if (parentRef.current) {
            setParentWidth(parentRef.current.offsetWidth); // width 값 설정
        }
    }, []);

    const togglePicks = (id) => {
        console.log(id);
        setIdList((prevList) =>
            prevList.includes(id)
                ? prevList.filter((item) => item !== id)
                : [...prevList, id]
        );
    };
    const onClickColdStart = () => {
        const fetchDate = async () => {
            setLoading(true);
            const res = await postColdStart(idList);

            if (res) {
                const data = await getName();
                setMemberId(data.memberId);
                setId(data.email);
                setNickname(data.nickname);
                setGender(data.gender);
                data.phone ? setPhone(data.phone) : null;
                data.birthOfDate ? setBirth(data.birthOfDate) : null;
                setLoading(false);
                setNoClick();
                navi("/");
            }
        };
        fetchDate();
    };

    return (
        <>
            {loading ? (
                <div className="flex flex-wrap items-center justify-center">
                    <div className={`${style.loader_6} ${style.loader}`}></div>
                </div>
            ) : (
                <>
                    <div
                        className="flex flex-wrap w-full gap-4 px-24 mb-20"
                        ref={parentRef}
                    >
                        {infor.map((val) => (
                            <div
                                className="relative z-0 flex flex-col gap-1 cursor-pointer"
                                key={val.id}
                                onClick={() => togglePicks(val.id)}
                                style={{
                                    pointerEvents:
                                        idList.length === 10 &&
                                        !idList.includes(val.id)
                                            ? "none"
                                            : "auto",
                                }}
                            >
                                <img
                                    src={val.rankedMenuResponse.imageUrl}
                                    alt={val.id}
                                    className="object-cover object-center rounded-3xl"
                                    style={{
                                        width: `${parentWidth / 5 - 52}px`,
                                        height: `${
                                            (parentWidth / 5 - 52) * 1.6
                                        }px`,
                                        outline: idList.includes(val.id)
                                            ? "5px solid #6e3bff"
                                            : "0px",
                                    }}
                                />
                                {idList.includes(val.id) && (
                                    <div
                                        className="absolute top-0 left-0 rounded-3xl"
                                        style={{
                                            width: `${parentWidth / 5 - 52}px`,
                                            height: `${
                                                (parentWidth / 5 - 52) * 1.6
                                            }px`,
                                            backgroundColor: "#6e3bff",
                                            opacity: 0.2,
                                        }}
                                    ></div>
                                )}
                                <div className="flex justify-between w-full mt-3">
                                    <div
                                        className="font-[Pretendard-Bold] text-lg "
                                        style={{
                                            color: idList.includes(val.id)
                                                ? "#6e3bff"
                                                : "#323232",
                                        }}
                                    >
                                        {val.name.slice(0, 7)}
                                    </div>
                                    <div
                                        className="px-2 py-0.5 text-sm  text-white flex items-center rounded-2xl "
                                        style={{
                                            backgroundColor: idList.includes(
                                                val.id
                                            )
                                                ? "#6e3bff"
                                                : "#c1c1c1",
                                        }}
                                    >
                                        {val.categoryResponseList[0].name}
                                    </div>
                                </div>
                                <div className="text-[#606060] flex justify-start text-sm">
                                    {val.rankedMenuResponse.name}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="fixed z-10 flex w-[460px]  py-4 bg-white bottom-3 rounded-3xl px-9 justify-between items-center">
                        <div className="flex gap-4">
                            <div className="text-[#606060] flex">
                                <div className="text-[#6e3bff] font-[Pretendard-SemiBold]">
                                    Palette
                                </div>
                                가 당신의 취향을 파악하기까지!
                            </div>
                            <div className="text-[#606060] flex">
                                <div className="text-[#6e3bff] mr-1">
                                    {idList.length}
                                </div>
                                / 10
                            </div>
                        </div>
                        <div
                            className="px-4 py-2 font-[Pretendard-SemiBold] rounded-3xl cursor-pointer"
                            style={{
                                backgroundColor:
                                    idList.length >= 5 ? "#6b3bff" : "#f3f3f3",
                                color:
                                    idList.length >= 5 ? "#ffffff" : "#c1c1c1",
                                cursor: idList.length >= 5 ? "pointer" : "auto",
                            }}
                            onClick={onClickColdStart}
                        >
                            완료
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
