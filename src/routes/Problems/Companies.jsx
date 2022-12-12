import React from "react";

function Companies({ name, req }) {
  return (
    <div className="py-2 px-3 text-xs font-medium text-center text-gray-300  rounded-full bg-neutral-800 opacity-90 ">
      {name}{" "}
      <span className="rounded-full bg-yellow-500 px-2 text-gray-800">
        {" "}
        {req}
      </span>
    </div>
  );
}

export default Companies;
