import React from 'react';

const SingleHabit = ({habit}) => {
    console.log(habit);
    
    return (
        <div>
            <h1>{habit.length}</h1>
        </div>
    );
};

export default SingleHabit;