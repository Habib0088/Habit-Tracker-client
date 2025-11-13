import React from "react";

const Exercise = () => {
  return (
    <div className="pt-7 bg-blue-100  ">
     <div className="w-11/12 mx-auto">
         <div className="text-center py-5  ">
        <h1 className="text-3xl font-bold text-[#098F2C]">About Exercise</h1>
        <p className="font-semibold text-[#098F2C]">
          Exercise is physical activity that strengthens the body and improves
          health. It boosts energy, enhances mood, and reduces stress. Regular
          exercise helps maintain a healthy weight and strengthens muscles and
          bones. It also improves heart, lung, and brain function, promoting
          overall well-being.
        </p>
      </div>
      {/* Container */}
      <div className="flex flex-col md:flex-row  bg-blue-100 ">
        <div className="left flex-1 p-5 flex flex-col items-center justify-center space-y-5">
          <h1 className="text-3xl font-bold text-center">
            "Exercise: Boost Your Health, Strength, and Energy."
          </h1>
          <p className="font-semibold">
            Exercise is essential for maintaining a healthy body and mind. It
            strengthens muscles, improves cardiovascular health, and boosts
            energy levels.
          </p>
          <button className="btn bg-[#03006B] text-white">
            Good To See You
          </button>
        </div>
        <div className="right flex-1">
          <img
            src="https://images.pexels.com/photos/2254135/pexels-photo-2254135.jpeg"
            alt=""
          />
        </div>
      </div>
     </div>
    </div>
  );
};

export default Exercise;
