import React from "react";

const Buttons = ({ page, setPage, limit, setLimit }) => {
  return (
    <div className="fixed bottom-5 right-5 z-10 space-x-3">
      <button
        disabled={page == 1}
        onClick={() => {
          setPage((prev) => prev - 1);
        }}
        className={`px-6 py-2 bg-white text-black rounded-2xl font-bold ${page == 1 ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}  active:scale-95`}
      >
        Previous
      </button>

      <button
        onClick={() => {
          setPage((prev) => prev + 1);
        }}
        className="px-6 py-2 bg-white text-black rounded-2xl font-bold cursor-pointer active:scale-95 "
      >
        Next
      </button>
      <div className=" flex gap-3 py-3">
        <label htmlFor="">Limit</label>
        <input
          className="w-20 px-2 py-1 bg-black/70 text-white rounded-2xl font-bold cursor-pointer"
          onChange={(e) => {
            setLimit(Number(e.target.value));
            setPage((prev) => prev);
          }}
          type="number"
          name=""
          id=""
          value={limit}
          step={10}
          min={10}
        />

        <label htmlFor="">Page</label>
        <input disabled className="w-20 px-3 py-1 bg-black/70 text-white rounded-2xl font-bold cursor-pointer" type="text" name="" id="" value={page} min={10} />
      </div>
    </div>
  );
};

export default Buttons;
