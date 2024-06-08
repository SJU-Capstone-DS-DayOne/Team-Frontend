import FinalHeader from "../components/finalComponent/FinalHeader";
import FinalList from "../components/finalComponent/FinalList";
import FinalMap from "../components/finalComponent/FinalMap";
// import { useEffect } from "react";

export default function Final() {
    return (
        <div className="z-30 flex flex-col items-center overflow-x-hidden w-dvw h-dvh">
            <header className="w-full h-[10dvh]">
                <FinalHeader />
            </header>
            <main className="flex justify-between w-full h-[90dvh] pl-24  z-20">
                <FinalList />
                <FinalMap />
            </main>
        </div>
    );
}
