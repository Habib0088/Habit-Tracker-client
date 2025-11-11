import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyHabit = () => {
  const { user } = useContext(AuthContext);
  const [habitData, setHabitData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    fetch(`http://localhost:3000/habitByEmail?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setHabitData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/delete/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              // Remove deleted habit from frontend state
              setHabitData(habitData.filter((habit) => habit._id !== id));
              Swal.fire("Deleted!", "Your habit has been deleted.", "success");
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };

  if (loading) {
    return (
      <h1 className="text-2xl font-bold text-center py-20">
        Loading.........
      </h1>
    );
  }

  return (
    <div className="w-full px-4 py-6">
      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-200">
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
                <td className="w-[400px]">{habit.Description}</td>
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
    </div>
  );
};

export default MyHabit;
