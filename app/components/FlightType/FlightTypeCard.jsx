import React from "react";

function BookingType({ children, name, selected, onTypeSet }) {
  let classList =
    "text-center p-2 text-black rounded-t flex items-center justify-center";
  classList += selected ? " bg-white ring ring-sky-300/[.6]" : " bg-stone-300/[0.6]";

  return (
    <div className={classList} onClick={() => onTypeSet()}>
      {children} <span className="ml-4 font-semibold">{name}</span>
    </div>
  );
}

export default BookingType;
