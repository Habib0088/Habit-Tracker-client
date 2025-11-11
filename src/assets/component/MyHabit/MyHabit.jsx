import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { data, Link } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const MyHabit = () => {
  const { user } = use(AuthContext);
  const [habitData, setHabitData] = useState([]);
  const notify = () => toast("Congratulation 😍 Your Data Has Added");
  console.log(habitData);

  useEffect(() => {
    if (!user?.email) return; // wait until user loads
    fetch(`http://localhost:3000/habitByEmail?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHabitData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  const handleDelete = (id) => {
    console.log(id);

    fetch(`http://localhost:3000/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 1) {
          notify();
        }
        console.log(data);
      });
      const filteredData=habitData.filter(singleHabit=>singleHabit._id!== data._id)
      setHabitData(filteredData)
  };
  return (
    <div className="w-full px-4 py-6">
      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-200">
          {/* Table Header */}
          <thead className="bg-gray-100 text-sm md:text-base">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Created Date</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-sm md:text-base">
            {habitData.map((habit, index) => (
              <tr key={habit._id} className="hover:bg-gray-50">
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <img
                      src={habit.Upload_image}
                      alt="img"
                      className="h-10 w-10 rounded-md object-cover"
                    />
                    <span className="font-semibold">{habit.Habit_title}</span>
                  </div>
                </td>
                <td className="w-[400px]"> {habit.Description}</td>
                <td>{habit.category}</td>
                <td>{new Date(habit.Created_at).toLocaleDateString()}</td>
                <td className="flex flex-wrap gap-2">
                  <Link to={`/update/${habit._id}`}>
                    <button className="btn btn-sm bg-blue-500 text-white">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(habit._id)}
                    className="btn btn-sm bg-red-500 text-white"
                  >
                    Delete
                  </button>
                  <button className="btn btn-sm bg-green-500 text-white">
                    Complete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyHabit;
