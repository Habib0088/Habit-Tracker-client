import React, { use, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../AuthContext/AuthContext";
import { useParams } from "react-router";

const Update = () => {
  const { id } = useParams();
  console.log(id);

  const [reminderTime, setReminderTime] = useState(""); // state for time
  const notify = () => toast("Congratulation 😍 Your Data Upadated Successfully");
  const { user } = use(AuthContext);
  // const navigator=useNavigate()
  const handleAddHabit = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      Habit_title: form.habitTitle.value,
      Description: form.description.value,
      category: form.category.value,
      reminderTime,
      Upload_image: form.uploadImage.value,
      Created_at: new Date(),

      Name: form.name.value,
    };
    console.log("clicked", formData);

    // fetch('',{}=>{

    // })

    fetch(`https://habittracker-teal.vercel.app/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        if (data.modifiedCount) {
          notify();
        }
      });
    // const name=
  };
  return (
    <div className="hero bg-base-200  pt-7">
      <div className=" flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full shadow-2xl">
          <div className="card-body">
            <h1 className="text-center font-bold text-2xl">Update Now !!</h1>
            <form onSubmit={handleAddHabit}>
              <fieldset className="fieldset w-[300px]">
                <label className="label">Habit Title</label>
                <input
                  name="habitTitle"
                  type="Text"
                  className="input"
                  placeholder="Description"
                />
                <label className="label">Description</label>
                <input
                  name="description"
                  type="text"
                  className="input"
                  placeholder="Password"
                />
                <label className="label">Category</label>
                {/* Category */}
                <select name="category" className="input" id="activity">
                  <option value="Morning">Morning</option>
                  <option value="Work">Work</option>
                  <option value="Fitness">Fitness</option>
                  <option value="Evening">Evening</option>
                  <option value="Study">Study</option>
                </select>
                {/* Time picker */}
                <label className="label">Reminder Time</label>
                <input
                  type="time"
                  className="input"
                  value={reminderTime}
                  onChange={(e) => setReminderTime(e.target.value)}
                />
                {/* Image */}
                <label className="label">Upload Image</label>
                <input
                  name="uploadImage"
                  type="Text"
                  className="input"
                  placeholder="Description"
                />
                {/* User name */}
                <label className="label">User Email</label>
                <input
                  defaultValue={user?.email}
                  readOnly
                  name="email"
                  type="Text"
                  className="input"
                  placeholder="Description"
                />
                <label className="label">Name</label>
                <input
                  defaultValue={user?.displayName}
                  readOnly
                  name="name"
                  type="Text"
                  className="input"
                  placeholder="Description"
                />
                <button className="btn btn-neutral mt-4">Add</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Update;
