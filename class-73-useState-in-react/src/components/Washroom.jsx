const Washroom = props => {
  let name = 'Men';
  let color = 'Women';

  if (props.user == 'Male') {
    name = 'Men';
    color = 'rgb(39, 114, 255)';
  } else if (props.user == 'Female') {
    name = 'Women';
    color = 'rgb(253, 114, 204)';
  } else {
    name = 'Transgender';
    color = 'conic-gradient(in oklab, violet, indigo, blue, green, yellow, orange, red, violet)';
  }

  return (
    <div
      style={{ background: color }}
      className="mt-5 w-130 h-80 flex justify-center items-center font-bold text-4xl rounded-3xl backdrop-blur-lg"
    >
      {name}'s Washroom
    </div>
  );
};

export default Washroom;
