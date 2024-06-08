import Header from "../components/mainComponent/Header";
import Aside from "../components/mainComponent/Aside";
import { Outlet } from "react-router-dom";

export default function Main() {
    return (
        <div className="z-30 flex flex-col items-center overflow-x-hidden w-dvw h-dvh">
            <header className="w-full h-[10dvh]">
                <Header />
            </header>
            <main className="flex justify-between w-full h-[90dvh] pl-20 xl:pl-32 z-20">
                <Aside />
                <Outlet />
            </main>
        </div>
    );
}
/* Outlet default <Article>
path /:id <Detail> */
