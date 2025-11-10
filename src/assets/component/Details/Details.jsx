import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Details = () => {
  const { id } = useParams();
  const [detailsData,setDetailsData]=useState()
  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:3000/habit/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDetailsData(data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div className="card card-side bg-base-100 shadow-sm lg:w-5/12 mx-auto lg:mt-7">
      <figure>
        <img className="w-[500px] h-[300px]"
          src={detailsData?.Upload_image}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Title: {detailsData?.Habit_title}</h2>
        <p>Category : {detailsData?.category}</p>
        <p>Description : {detailsData?.Description}</p>
        <h2>Created By : {detailsData?.Email}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Complete</button>
        </div>
      </div>
    </div>
  );
};

export default Details;

//  const {id}=useParams()
//     console.log(id);

//     useEffect(()=>{

//         fetch(`http://localhost:3000/habit/${id}`).then(res=>res.json()).then(data=>{
//             console.log(data);

//         }).catch(err=>{
//             console.log(err);

//         })
//     },[id])
