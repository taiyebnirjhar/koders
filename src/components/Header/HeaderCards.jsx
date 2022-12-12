import React from "react";

function HeaderCards({ title, date, time, img }) {
  return (
    <div
      className="p-6 w-5/6 sm:2/5 lg:w-4/12  bg-white rounded-lg  shadow-md  bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${img})` }}
    >
      <h5 className="mb-2 text-lg font-bold tracking-tight text-amber-100">
        {title}
      </h5>

      <p className="text-sm font-medium  text-amber-100">{date}</p>
      <p className="text-sm font-medium mb-3  text-amber-100">{time}</p>
      <a
        href="#"
        className="inline-flex items-center py-2 px-3  font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-500 custome_btn"
      >
        Read more
        <svg
          aria-hidden="true"
          className="ml-1 -mr-1 w-2 h-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  );
}

export default HeaderCards;
