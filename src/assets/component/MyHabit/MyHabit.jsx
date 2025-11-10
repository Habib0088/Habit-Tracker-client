import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { Link } from 'react-router';

const MyHabit = () => {
    const {user}=use(AuthContext)
    const[habitData,setHabitData]=useState([])
    console.log(user);
    

    useEffect(()=>{
        fetch(`http://localhost:3000/habitByEmail?email=${user?.email}`).then(res=>res.json()).then(data=>{
            console.log(data);
            setHabitData(data)
            
        }).then(err=>{
            console.log(err);
            
        })

    },[user])
    return (
           <div className="max-w-11/12 mx-auto overflow-x-auto">
      <table className="table">
        {/* Table Header - rendered only once */}
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>

        {/* Table Body - rows repeated for each habit */}
        <tbody>
          {habitData.map((habit, index) => (
            <tr key={habit._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={habit.Upload_image} alt="Avatar" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{habit.Habit_title}</div>
                  </div>
                </div>
              </td>
              <td>{habit.Description}</td>
              <td>{habit.category}</td>
              <td>
                <Link to={`/details/${habit._id}`}>
                  <button className="btn p-2 bg-cyan-400 text-2xl">Details</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default MyHabit;