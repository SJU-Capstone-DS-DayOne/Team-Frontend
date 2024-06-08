import Palette from "./Palette";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect, useRef } from "react";

gsap.registerPlugin(TextPlugin);

export default function Section1() {
    const fontRef = useRef(null);
    useEffect(() => {
        gsap.to(fontRef.current, 2, {
            ease: "none",
            text: "너와 나의 유일한 데이트 코스",
            delay: 4,
        });
    }, []);
    return (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-dvh">
            <div className="flex items-center bg-center bg-custom-svg absolute top-[10%]">
                <Palette />
            </div>
            <div
                className="font-[SUITE-Regular] text-[40px] text-[#323232] flex justify-center items-center h-[90px] mt-[300px]"
                ref={fontRef}
            ></div>
        </div>
    );
}
// bg - custom - svg;
