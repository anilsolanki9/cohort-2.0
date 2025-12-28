import React from 'react';

const ContactCard = props => {
  return (
    <div key={props.idx}>
      <div className="rounded-2xl bg-white shadow-lg p-6 relative">
        {/* Remove button */}
        <div
          className="bg-red-500 text-xs px-3 py-2 w-fit text-white rounded absolute right-4 top-3 active:scale-95 select-none cursor-pointer transition-all duration-200 hover:bg-red-600"
          onClick={() => props.removeHandler(props.idx)}
        >
          Remove
        </div>

        {/* Profile + Name + Role */}
        <div className="flex items-center gap-4">
          <img
            src={props.elem.imageUrl}
            alt="Profile"
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover ring-4 ring-slate-200"
          />

          <div className="text-left">
            <h2 className="text-lg font-semibold text-slate-800">{props.elem.userName}</h2>
            <p className="text-sm text-slate-500">{props.elem.userRole}</p>
          </div>
        </div>

        {/* Call button */}
        <a
          href={`tel:${props.elem.telNumber}`}
          className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white py-3 hover:bg-slate-800 transition-all duration-200 active:scale-95"
        >
          <i className="ri-phone-fill text-lg"></i>
          Call Now
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
