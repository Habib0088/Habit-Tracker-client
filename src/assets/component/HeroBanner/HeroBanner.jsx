import React from "react";
import "./Herobanner.css";
const HeroBanner = () => {
  return (
    <div className="h-94 py-6 w-11/12 mx-auto">
      <div class="w-full h-94 bg-[url('https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/ways-to-eat-clean-1296x728-feature.jpg?w=1155&h=989')] bg-cover bg-center flex  justify-center rounded-md">
        {/* <!-- Content --> */}
        <div className="  flex flex-col  space-y-4">
          <h1 className="font-bold text-4xl ">American Food</h1>
          <p className="text-center text-2xl font-semibold">The Best Taste Food</p>
        </div>
        <p></p>
      </div>
    </div>
  );
};

export default HeroBanner;
