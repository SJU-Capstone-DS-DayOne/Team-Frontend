import { useState, useEffect } from "react";
import Login1 from "../components/initialComponent/Login1";

export default function Login() {
    const [isLargeVh, setIsLargeVh] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerHeight > 700) {
                setIsLargeVh(true);
            } else {
                setIsLargeVh(false);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div className="w-full h-[90dvh] bg-[#f3f3f3] relative flex justify-center items-center mt-[10dvh]">
            <div
                className={`absolute ${
                    isLargeVh ? "top-10" : "top-6"
                } font-[Pretendard-Bold] text-[#6E3Bff] text-[36px] cursor-pointer`}
            >
                Palette
            </div>
            <Login1 />
        </div>
    );
}
