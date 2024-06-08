import DateCourseAside from "../components/datecourseComponent/DateCourseAside";
import DateCourseMain from "../components/datecourseComponent/DateCourseMain";
import FinalHeader from "../components/finalComponent/FinalHeader";

export default function DateCourse() {
    return (
        <div className="z-30 flex flex-col items-center overflow-x-hidden w-dvw h-dvh">
            <header className="w-full h-[10dvh]">
                <FinalHeader />
            </header>
            <main className="flex justify-between w-full h-[90dvh] pl-24 z-20">
                <DateCourseAside />
                <DateCourseMain />
            </main>
        </div>
    );
}
