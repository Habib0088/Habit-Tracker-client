import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import { motion } from "framer-motion";

const BrowseAll = () => {
  const { user } = useContext(AuthContext);
  const [habitData, setHabitData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://habittracker-teal.vercel.app/browseAll")
      .then((res) => res.json())
      .then((data) => {
        setHabitData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-cyan-50 to-emerald-100">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="text-3xl font-bold text-cyan-600"
        >
          Loading...
        </motion.h1>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 150 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen py-12 bg-gradient-to-br from-cyan-50 to-emerald-100"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        //   transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500 drop-shadow-md"
        >
           Explore All Habits
        </motion.h2>
        <p className="text-gray-600 mt-2 text-lg">
          Discover inspiring habits shared by users around the world ✨
        </p>
      </div>

      {/* Cards */}
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {habitData.map((data, index) => (
          <motion.div
            key={data._id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            // transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="relative overflow-hidden rounded-3xl backdrop-blur-md bg-white/70 border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={data?.Upload_image}
                alt={data?.Habit_title}
                className="w-full h-56 object-cover rounded-t-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-t-3xl"></div>
              <h3 className="absolute bottom-4 left-5 text-white text-2xl font-bold drop-shadow-lg">
                {data?.Habit_title}
              </h3>
            </div>

            {/* Info Section */}
            <div className="p-6 space-y-3">
              <p className="text-gray-700">
                <span className="font-semibold text-gray-900">Category:</span>{" "}
                {data?.category}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-gray-900">Creator:</span>{" "}
                {data?.Name}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-gray-900">Created:</span>{" "}
                {new Date(data?.Created_at).toDateString()}
              </p>

              <motion.div whileTap={{ scale: 0.97 }} className="pt-4">
                {user ? (
                  <Link to={`/details/${data._id}`}>
                    <button className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold shadow-md hover:shadow-lg transition-all">
                      View Details
                    </button>
                  </Link>
                ) : (
                  <Link to={"/login"}>
                    <button className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold shadow-md hover:shadow-lg transition-all">
                      View Details
                    </button>
                  </Link>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BrowseAll;
