import Marquee from "react-fast-marquee";
const LatestNews = () => {
    return (
        <div className="container bg-base-300 p-2 flex gap-3">
            <button className="bg-green-950 text-white px-4 py-2">Latest</button>
            <Marquee pauseOnHover={true}>
                <p>Iran 180 missile drop on Israel</p>
                <p>Iran 180 missile drop on Israel</p>
                <p>Iran 180 missile drop on Israel</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;