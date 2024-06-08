// import CircleScroll from "../components/initialComponent/CircleScroll";
import CoupleConnect from "../components/initialComponent/CoupleConnect";
import Login1 from "../components/initialComponent/Login1";

export default function InitialSetup() {
    return (
        <div className="flex items-center justify-center overflow-hidden duration-500 w-dvw mix-blend-screen bg-[#f3f3f3]">
            <div className="flex flex-col items-center justify-center overflow-hidden w-dvw">
                <div className="fixed text-2xl font-bold leading-9 tracking-tight text-center text-slate-800 top-7">
                    Palette
                </div>
                <Login1 />
                <CoupleConnect />
            </div>
        </div>
    );
}
