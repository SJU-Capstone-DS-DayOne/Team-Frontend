import { useStore } from "zustand";

import storeInputKey from "../../clients/InputKeyControl";
import { useEffect, useRef, useState } from "react";
import CodeInputForm from "./CodeInputForm";
import storeSignalCode from "../../clients/signalCode";
import { useNavigate } from "react-router-dom";
import { postCoupleCode } from "../../apis/postCoupleCode";
import { getCoupleCode } from "../../apis/getCoupleCode";

export default function CoupleConnect() {
    const { signalCode, setSignalCode } = useStore(storeSignalCode);
    const { key, inputValue, onReset } = useStore(storeInputKey);

    const [haveCode, setHaveCode] = useState(false);

    const buttonRef = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchCoupleCode = async () => {
            try {
                const res = await getCoupleCode();

                setSignalCode(res);
            } catch (error) {
                console.error("Error fetching couple code:", error);
            }
        };

        fetchCoupleCode(); // 비동기 함수를 호출합니다.

        onReset();
    }, []);

    useEffect(() => {
        if (signalCode !== 0) setHaveCode(true);
    }, [signalCode]);

    useEffect(() => {
        if (key === 6) {
            buttonRef.current.style.opacity = "1";
            buttonRef.current.style.pointerEvents = "auto";
        } else {
            buttonRef.current.style.opacity = "0.5";
            buttonRef.current.style.pointerEvents = "none";
        }
    }, [key]);

    const onCoupleConnect = async () => {
        const result = await postCoupleCode(parseInt(inputValue));
        if (result) navigate("/react-actions/");
    };

    return (
        <div className="flex items-center justify-center w-dvw h-[90dvh] bg-[#f3f3f3] mt-[10dvh]">
            <div className="flex flex-col justify-center items-center p-8 bg-white rounded-[24px] gap-9">
                <div className="flex flex-col items-center justify-center gap-3">
                    <div className="text-2xl font-[Pretendard-Bold] text-[#6E3BFF] ">
                        연인의 시그널은?
                    </div>
                    <div className="text-[#606060] text-lg">
                        연인의 숫자 여섯자리를 입력해주세요
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-5 w-[350px]">
                    <div className="p-4 bg-[#f3f3f3] rounded-xl text-[#606060] text-3xl font-[Pretendard-Bold] w-full text-center h-[67.983px]">
                        {haveCode ? signalCode : null}
                    </div>
                    <CodeInputForm />
                </div>
                <button
                    type="submit"
                    className="flex items-center justify-center w-full p-4 text-white rounded-xl bg-[#6e3bff]  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{
                        opacity: "0.7",
                        pointerEvents: "none",
                    }}
                    tabIndex={-1}
                    ref={buttonRef}
                    onClick={onCoupleConnect}
                >
                    연동하기
                </button>
            </div>
        </div>
    );
}

{
    /* <div className="flex flex-col items-center w-8/12 h-full rounded">
    <div className="relative flex items-center justify-around w-full  h-14 border-[1px] border-gray-300 rounded-xl">
        <div className="p-2 text-xl font-semibold leading-9 tracking-tight text-center text-[#686868] rounded-xl">
            {haveCode ? signalCode : null}
        </div>
    </div>
    <div className="flex flex-col items-center w-full justify-evenly">
        <CodeInputForm />

        <button
            type="submit"
            className="flex w-full h-10 items-center justify-center rounded bg-slate-800 px-3 py-1.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
                opacity: "0.7",
                pointerEvents: "none",
            }}
            tabIndex={-1}
            ref={buttonRef}
            onClick={onCoupleConnect}
        >
            연동하기
        </button>
    </div>
</div>; */
}
