import { CiBookmark } from "react-icons/ci";
import { IoMdEye } from "react-icons/io";
import { Link } from "react-router-dom";
const SingleNews = ({ item }) => {
    const { _id, rating, total_view, title, author, image_url, details } = item;
    return (
        <div className="border rounded-lg space-y-4">
            <div className="bg-base-300 p-2 flex justify-between">
                <div className="flex gap-2 items-center">
                    <div>
                        <img src={author?.img} alt="" className="w-10 h-10 rounded-full" />
                    </div>
                    <div>
                        <h4 className="font-bold">{author?.name}</h4>
                        <p>{author?.published_date}</p>
                    </div>
                </div>
                <div>
                    <p className="text-2xl font-bold"><CiBookmark /></p>
                </div>
            </div>
            <div className="p-3">
                <h1 className="text-xl font-bold">{title}</h1>
                <img src={image_url} alt="" className="my-3 w-full h-1/2" />
                <p>
                    {
                        details.length > 200 ? <p>
                        {details.slice(0, 200)}  <Link><span className="font-semibold text-blue-950 ml-1">See More...</span></Link >
                    </p> : details
                    }
                </p>
                <div className="flex justify-between mt-4 border-t pt-3">
                    <p>Rating: {rating?.number}</p>
                    <p className="flex gap-2 items-center"><IoMdEye /> {total_view}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleNews;