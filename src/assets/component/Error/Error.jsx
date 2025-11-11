import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
            <img className='h-[90vh] w-full' src="https://i.ibb.co.com/TD6n6SNF/pagenot-found2.jpg" alt="" />
            <button className='text-center font-bold btn mx-auto flex  bg-sky-600 text-white'><Link to='/'>Back To Home</Link></button>
        </div>
    );
};

export default Error;