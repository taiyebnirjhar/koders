import { React, useState } from "react";
import "./Blog.css";

function BlogCard({ que, ans }) {
  const [viewData, setViewData] = useState(false);
  return (
    <div className=" rounded-lg shadow-md bg-neutral-900">
      <div className="flex items-center justify-between w-full p-8">
        <h1 className="font-semibold text-gray-300 opacity-95">{que}</h1>

        <span
          className="text-gray-400 bg-gray-100 rounded-full"
          onClick={() => {
            setViewData((prev) => !prev);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={!viewData ? "M12 6v6m0 0v6m0-6h6m-6 0H6" : "M18 12H6"}
            />
          </svg>
        </span>
      </div>

      <hr className={!viewData ? "hidden" : "hr__m opacity-5"} />

      <p
        className={
          !viewData
            ? "hidden"
            : "p-8 text-sm text-gray-300 opacity-95 transition delay-400"
        }
      >
        {ans}
      </p>
    </div>
  );
}

export default BlogCard;
