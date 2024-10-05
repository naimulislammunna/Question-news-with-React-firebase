import Header from "../../Components/Header/Header";
import LatestNews from "../../Components/LatestNews/LatestNews";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import Navber from "../../Components/Navber/Navber";
import News from "../../Components/News/News";
import RightSidebar from "../../Components/RightSidebar/RightSidebar";

const Home = () => {
    return (
        <>
            <Header/>
            <LatestNews/>
            <Navber/>
            <div className="container grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div className="">
                    <LeftSidebar/>
                </div>
                <div className=" col-span-2">
                    <News/>
                </div>
                <div className="">
                    <RightSidebar/>
                </div>
            </div>
        </>
    );
};

export default Home;