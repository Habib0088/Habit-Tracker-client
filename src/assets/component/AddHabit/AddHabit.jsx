import React, { use, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
  import { ToastContainer, toast } from 'react-toastify';

const AddHabit = () => {
  const [reminderTime, setReminderTime] = useState(""); // state for time
 const notify = () => toast("Congratulation 😍 Your Data Has Added");
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
      Upload_image:form.uploadImage.value,
      Created_at:new Date(),
      Created_by:form.email.value,
      Name:form.name.value
    };
    console.log("clicked",formData);

    // fetch('',{}=>{

    // })
    
    fetch('https://habittracker-teal.vercel.app/habit',{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(formData)
    }).then(res=>res.json()).then(data=>{
        console.log(data);
        form.reset()
        if(data.insertedId){
notify()
        }
        
    })
    // const name=
  };
  return (
    <div className="hero bg-base-200  pt-7">
      <div className=" flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full shadow-2xl">
          <div className="card-body">
            <h1>Add Your Habit</h1>
            <form onSubmit={handleAddHabit}>
              <fieldset className="fieldset w-[300px]">
                <label className="label">Habit Title</label>
                <input
                  name="habitTitle"
                  type="Text"
                  className="input"
                  placeholder="Habit Title"
                />
                <label className="label">Description</label>
                <input
                  name="description"
                  type="text"
                  className="input"
                  placeholder="Description"
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
                  placeholder="Image Link"
                />
                {/* User name */}
                <label className="label">User Email</label>
                <input
                  defaultValue={user?.email}
                  readOnly
                  name="email"
                  type="Text"
                  className="input"
                  placeholder="User Email"
                />
                <label className="label">Name</label>
                <input
                  defaultValue={user?.displayName}
                  readOnly
                  name="name"
                  type="Text"
                  className="input"
                  placeholder="Name"
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

export default AddHabit;

// db: Habit-tracker
// password:ufOk6srAY6jKcfnb