import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Statistics.css";

function Statistics() {
  const data = useLoaderData().data;
  console.log(data);
  return (
    <div>
      <div className="Statistics__container">
        <div className="h-screen mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="max-w-4xl px-6 py-10 mx-auto">
            <h1 className="text-4xl font-semibold text-center text-gray-300 opacity-95">
              Statistic of Quizes
            </h1>
            <div className="mt-16 space-y-8 md:max-w-3xl mx-auto overflow-hidden flex flex-1 flex-wrap justify-center">
              <LineChart
                style={{
                  "@media all and (max-width: 480px)": {
                    width: "300px",
                    height: "200px",
                  },
                  // responsiveContainer not working
                  // i have tried inline / external / tailwind every possible way i know . still not working
                }}
                className="custome__res_container"
                width={600}
                height={450}
                data={data}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey={"total"} stroke="#82ca9d" />
              </LineChart>
              {/* <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="uv"
                    stroke="#82ca9d"
                  />
                </LineChart>
              </ResponsiveContainer> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /*  */
}
export default Statistics;
