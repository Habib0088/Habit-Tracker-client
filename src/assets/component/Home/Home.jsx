import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import { motion } from "framer-motion";
import HeroBanner from "../HeroBanner/HeroBanner";
import Exercise from "../Exercise/Exercise";
import Benefit from "../Benefit/Benefit";
import Slider from "../Slider/Slider";


const Home = () => {
  const [habitData, setHabitData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = React.useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://habittracker-teal.vercel.app/habit");
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
    return <h1 className="text-2xl text-center font-bold py-20">Loading...</h1>;
  }
  const handleForm=(e)=>{
    e.preventDefault()
    const data=e.target.search.value
    // console.log(data);
    fetch(`https://habittracker-teal.vercel.app/search?search=${data}`).then(res=>res.json()).then(data=>{
      console.log(data);
      setHabitData(data)
      
    })
    
  }
  return (
    <div>
        <div>
             {/* SERCH INPUT ---------------------- */}
              <form className="right-2" onSubmit={handleForm}>
                <label className="input ">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </g>
                  </svg>
                  <input type="search" name="search" required placeholder="Search" />
                  <button className="btn w-[90px]">Search</button>
                </label>
              </form>
        
              {/*  SErach end here */}
      </div>
      <div className="w-11/12 mx-auto mt-5">
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-16">
          {habitData.map((habit, index) => (
            <motion.div
              key={habit._id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-3xl shadow-md overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-transform "
            >
              {/* Image */}
              <img
                src={habit.Upload_image}
                alt={habit.Habit_title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-5 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-1">
                    {habit.Habit_title}
                  </h2>
                  <p className="text-gray-500 text-sm mb-3">
                    {habit.Description?.slice(0, 80)}...
                  </p>
                  <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                    {habit.category}
                  </span>
                  {/* <button  className="btn block w-full mt-4  bg-gradient-to-r from-cyan-500 to-emerald-500">Detail</button> */}
                   <div className="mt-5 flex justify-end">
                  <Link to={user ? `/details/${habit._id}` : "/login"}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm font-medium shadow"
                    >
                      View Details
                    </motion.button>
                  </Link>
                </div>
                </div>

               
              </div>
            </motion.div>
          ))}
        </div>
        <div>{/* <HeroSliderComponent></HeroSliderComponent> */}</div>
      </div>
      <Slider></Slider>
      <HeroBanner></HeroBanner>
      <Exercise></Exercise>
      <Benefit></Benefit>
    </div>
  );
};

export default Home;
