import { Outlet } from "react-router-dom";
import LandingHeader from "../components/landingComponent/LandingHeader";

export default function Landing() {
    return (
        <div className="w-dvw h-[90dvh]">
            <LandingHeader />
            <main className="w-full">
                <Outlet />
            </main>
        </div>
    );
}
