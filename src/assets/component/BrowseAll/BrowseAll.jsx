import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";

const BrowseAll = () => {
    const { user } = use(AuthContext);
    const [habitData, setHabitData] = useState([]);
    const [loading, setLoading] = useState(true); // <-- added loading state

    useEffect(() => {
        fetch("http://localhost:3000/browseAll")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setHabitData(data);
                setLoading(false); // <-- stop loading when data is fetched
            })
            .catch((err) => {
                console.log(err);
                setLoading(false); // <-- stop loading even if error
            });
    }, []);

    if (loading) {
        return <h1 className="text-2xl font-bold text-center py-20">Loading.......</h1>;
    }

    return (
        <div className="w-11/12 mx-auto ">
            <h2>Browse All {habitData.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {habitData.map((data) => (
                    <div className="card card-side bg-base-100 shadow-sm" key={data._id}>
                        <figure>
                            <img
                                className="w-[200px] h-[200px] object-fill"
                                src={data?.Upload_image}
                                alt="Movie"
                            />
                        </figure>
                        <div className="card-body space-y-2">
                            <h2 className="card-title text-2xl text-emerald-600">
                                {data?.Habit_title}
                            </h2>
                            <h3>
                                <span className="font-semibold">Category:</span> {data?.category}
                            </h3>
                            <p>
                                <span className="font-semibold">Creator:</span> {data?.Name}
                            </p>
                            <p>
                                <span className="font-semibold">Time:</span> {new Date(data?.Created_at).toDateString()}
                            </p>
                            <div className="card-actions justify-end">
                                {user ? (
                                    <Link to={`/details/${data._id}`}>
                                        <button className="btn p-2 bg-cyan-400 text-2xl">Details</button>
                                    </Link>
                                ) : (
                                    <Link to={'/login'}>
                                        <button className="btn p-2 bg-cyan-400 text-2xl">Details</button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrowseAll;
