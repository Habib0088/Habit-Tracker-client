import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';

const Home = () => {
  const [habitData, setHabitData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = React.useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch('http://localhost:3000/habit');
        const data = await res.json();
        setHabitData(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <h1 className='text-2xl text-center font-bold py-20 '>Loading.........</h1>;
  }

  return (
    <div className="max-w-11/12 mx-auto overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
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
                {user ? (
                  <Link to={`/details/${habit._id}`}>
                    <button className="btn p-2 bg-cyan-400 text-2xl">Details</button>
                  </Link>
                ) : (
                  <Link to={'/login'}>
                    <button className="btn p-2 bg-cyan-400 text-2xl">Details</button>
                  </Link>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
