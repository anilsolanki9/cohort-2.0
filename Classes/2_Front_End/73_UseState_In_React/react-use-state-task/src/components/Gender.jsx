import React from 'react';

const Gender = props => {
  let color = null;

  if (props.gender == 'Male') {
    color = 'rgb(42, 155, 253)';
  } else if (props.gender == 'Female') {
    color = 'rgb(238, 104, 180)';
  } else {
    color = ' conic-gradient(in oklab, violet, indigo, blue, green, yellow, orange, red, violet)';
  }

  return (
    <div
      style={{ background: color }}
      className="h-75 w-125 flex justify-center items-center font-bold text-4xl  my-8 rounded-3xl animate-AN"
    >
      {props.gender == 'male' ? 'Men' : 'Women'}'s Washroom
    </div>
  );
};

export default Gender;
