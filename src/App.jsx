import { Route, Routes } from "react-router-dom";
import ColdStart from "./pages/ColdStart";
import Infor from "./pages/Infor";
import Main from "./pages/Main";
import Detail from "./components/mainComponent/Detail";
import Article from "./components/mainComponent/Article";
import SignUp from "./pages/SignUp";
import Final from "./pages/Final";
import Profile from "./pages/Profile";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import CoupleConnect from "./components/initialComponent/CoupleConnect";
import LandingMain from "./components/landingComponent/LandingMain";
import DateCourse from "./pages/DateCourse";
import History from "./pages/History";
import "./index.css";

export default function App() {
    return (
        <Routes>
            <Route path="/Palette-FE/" element={<Landing />}>
                <Route index element={<LandingMain />} />
                <Route path="/Palette-FE/login" element={<Login />} />
                <Route path="/Palette-FE/signup" element={<SignUp />} />
                <Route path="/Palette-FE/coldstart" element={<ColdStart />} />
                <Route path="/Palette-FE/profile" element={<Profile />} />
                <Route path="/Palette-FE/infor" element={<Infor />} />
                <Route
                    path="/Palette-FE/coupleconnect"
                    element={<CoupleConnect />}
                />
                <Route path="/Palette-FE/history" element={<History />} />
            </Route>

            <Route path="/Palette-FE/main" element={<Main />}>
                <Route index element={<Article />} />
                <Route path="/Palette-FE/main/:id" element={<Detail />} />
            </Route>

            <Route path="/Palette-FE/final" element={<Final />} />
            <Route path="/Palette-FE/datecourse" element={<DateCourse />} />
        </Routes>
    );
}
