import { useEffect, useState } from "react";
import SingleNews from "./SingleNews";

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('./news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    return (
        <div>
            <h2 className="text-lg font-bold mb-3">Dragon News Home</h2>
            <div className="grid grid-cols-1 space-y-4">
                {
                    news?.map(item => <SingleNews key={item._id} item={item}></SingleNews>)
                }
            </div>
        </div>
    );
};

export default News;