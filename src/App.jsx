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
import Test from "./pages/Test";
import AboutUs from "./pages/AboutUs";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing />}>
                <Route index element={<LandingMain />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/coldstart" element={<ColdStart />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/infor" element={<Infor />} />
                <Route path="/coupleconnect" element={<CoupleConnect />} />
                <Route path="/history" element={<History />} />
                <Route path="/aboutus" element={<AboutUs />} />
            </Route>

            <Route path="/main" element={<Main />}>
                <Route index element={<Article />} />
                <Route path="/main/:id" element={<Detail />} />
            </Route>
            <Route path="/test" element={<Test />} />

            <Route path="/final" element={<Final />} />
            <Route path="/datecourse" element={<DateCourse />} />
        </Routes>
    );
}
