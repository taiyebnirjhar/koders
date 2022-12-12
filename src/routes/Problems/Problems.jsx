import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import Buttons from "./Buttons";
import Companies from "./Companies";
import "./Problems.css";
import ProblemsCard from "./ProblemsCard";

function Problems() {
  const problemsData = useLoaderData();

  const companies = [
    { id: 1, name: "Amazon", req: 1268 },
    { id: 2, name: "Google", req: 1220 },
    { id: 3, name: "Microsoft", req: 791 },
    { id: 4, name: "Facebook", req: 719 },
    { id: 5, name: "Apple", req: 676 },
    { id: 6, name: "Adobe", req: 537 },
    { id: 7, name: "Uber", req: 484 },
    { id: 8, name: "Oracle", req: 268 },
    { id: 9, name: "Yahoo", req: 188 },
    { id: 10, name: "Tiktok", req: 180 },
    { id: 11, name: "LinkedIn", req: 178 },
    { id: 12, name: "Ebay", req: 133 },
    { id: 13, name: "Walmart global tech", req: 128 },
    { id: 14, name: "Twitter", req: 166 },
  ];

  return (
    <div className="problems__container h-full lg:h-screen">
      <Header />

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <div className="flex flex-col md:flex-row wrap">
          <div className="md:w-2/3  md:h-fit">
            <div className="flex md:flex-row justify-around">
              {problemsData.data.map((item) => {
                const { id, logo, name } = item;

                return (
                  <ProblemsCard
                    key={id}
                    logo={logo}
                    name={name}
                    toRedirect={`/problems/${id}`}
                  />
                );
              })}
            </div>
            <hr className="hr__m opacity-30" />

            <div className="flex flex-row flex-wrap gap-4 justify-around my-6">
              <button className="text-gary-400  bg-slate-50   font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 ">
                All Categories
              </button>
              {problemsData.data.map((item) => {
                return (
                  <Buttons
                    name={item.name}
                    total={item.total}
                    key={item.id}
                    toRedirect={`/problems/${item.id}`}
                  />
                );
              })}
            </div>
          </div>

          <div className=" w-full md:w-1/3 ">
            <div className="p-6 mx-auto w-full md:mx-4 md:w-11/12  md:w-full max-w-sm  rounded-lg  shadow-md sm:p-8 bg-neutral-900 mb-4">
              <div>
                <h3 className="font-medium text-base text-gray-300">
                  Companies
                </h3>
              </div>

              <form className="py-4">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-300 sr-only "
                >
                  Search
                </label>
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 "
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    // id="default-search"
                    className="block  pl-10 w-full text-sm rounded-lg bg-neutral-800 border-0"
                    placeholder="Search for tags"
                    required=""
                  />
                </div>
              </form>
              <div className="w-full flex flex-row flex-wrap gap-4 ">
                {companies.map((item) => (
                  <Companies name={item.name} req={item.req} key={item.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Problems;
