import React from "react";
import { Link } from "react-router-dom";
import "./ProblemsCard.css";

function ProblemsCard({ name, logo, toRedirect }) {
  return (
    <Link to={toRedirect} className="custome__p__card h-fit">
      <div className=" w-fit rounded-lg border border-neutral-900 shadow-md p-4 ">
        <div>
          <img className="rounded-t-lg" src={logo} alt="" />
        </div>
      </div>
    </Link>
  );
}

export default ProblemsCard;
