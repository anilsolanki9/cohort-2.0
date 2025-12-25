import { useState } from 'react';
import Washroom from './components/Washroom';

function App() {
  const [gender, setGender] = useState('Male');

  const changeGender = () => {
    if (gender == 'Male') setGender('Female');
    else if (gender == 'Female') setGender('Other');
    else setGender('Male');
  };

  return (
    <div className="p-3">
      <h1 className="text-6xl text-transparent font-bold pb-5 bg-linear-150 from-red-400 to-blue-300 bg-clip-text w-fit">
        Your gender is {gender}
      </h1>
      <button
        onClick={changeGender}
        className="px-5 py-3 rounded-3xl font-bold text-2xl text-white bg-linear-150 from-red-400 to-blue-300 shadow-md shadow-black active:scale-95 transition-all duration-300 cursor-pointer"
      >
        Change Gender
      </button>
      <Washroom user={gender} />
    </div>
  );
}

export default App;
