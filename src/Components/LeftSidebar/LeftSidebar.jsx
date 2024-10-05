import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('./categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    return (
        <div className="h-full">
            <div className="sticky top-0">
                <h3 className="font-bold">All Category</h3>
                <div className="flex flex-col gap-2 p-3">
                    {
                        category.map(item => <Link
                            key={item.id}
                            className="bg-base-300 px-4 py-2 rounded-lg font-semibold"
                        >{item?.name}</Link>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;