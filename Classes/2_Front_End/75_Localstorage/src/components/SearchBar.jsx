import React from "react";

const SearchBar = ({ setQuery, setCondition }) => {
  return (
    <div className="flex gap-3 px-10 py-4 bg-Surface">
      <input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        className="px-5 py-2 rounded-2xl border-none outline-none bg-TxtPri/20 text-TxtPri font-semibold text-2xl"
        type="text"
        placeholder="search student"
      />
      <div
        className="flex items-center text-2xl px-7 py-2 text-shadow-xs text-shadow-black bg-Muted w-fit rounded-full font-bold cursor-pointer active:scale-95 transition-all duration-200"
        onClick={() => {
          setCondition("all");
        }}
      >
        All
      </div>
      <div
        className="flex items-center text-2xl px-7 py-2 text-shadow-xs text-shadow-black bg-emerald-600 w-fit rounded-full font-bold cursor-pointer active:scale-95 transition-all duration-200"
        onClick={() => {
          setCondition("passed");
        }}
      >
        Passed
      </div>
      <div
        className="flex items-center text-2xl px-7 py-2 text-shadow-xs text-shadow-black bg-red-500 w-fit rounded-full font-bold cursor-pointer active:scale-95 transition-all duration-200"
        onClick={() => {
          setCondition("failed");
        }}
      >
        Failed
      </div>
    </div>
  );
};

export default SearchBar;
