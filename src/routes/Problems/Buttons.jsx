import React from "react";
import { Link } from "react-router-dom";

function Buttons({ name, total, toRedirect }) {
  return (
    <Link
      to={toRedirect}
      className="text-gray-400  bg-neutral-800 hover:bg-neutral-900  font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 text-center"
    >
      <span className="opacity-80"></span>
      {name} <span className="text-yellow-500 pr-2">{total}</span>
    </Link>
  );
}

export default Buttons;
