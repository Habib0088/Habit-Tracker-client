import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const BrowseAll = () => {
  const [habitData, setHabitData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/browseAll")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHabitData(data);
      });
  }, []);
  return (
    <div className="w-11/12 mx-auto ">
      <h2>Browse All{habitData.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {habitData.map((data) => (
          <div className=" card card-side bg-base-100 shadow-sm">
            <figure>
              <img className="w-[200px] h-[200px] object-fill" src={data?.Upload_image} alt="Movie" />
            </figure>
            <div className="card-body space-y-2">
              <h2 className="card-title text-2xl text-emerald-600">
                {data?.Habit_title}
              </h2>
              <h3 ><span className="font-semibold">Category:</span> {data?.category}</h3>
              <p ><span className="font-semibold">Creator:</span> {data?.Name}</p>
              <p ><span className="font-semibold">Time:</span> {new Date(data?.Created_at).toDateString()}</p>
              <div className="card-actions justify-end">
               
            <Link to={`/details/${data._id}`}>
                  <button className="btn p-2 bg-cyan-400 text-2xl">Details</button>
                </Link>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseAll;
