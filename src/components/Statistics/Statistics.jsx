import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const statistics = [
    {
      assignment: "Assignment 1",
      name: "New Year New Me",
      mark: 60,
    },
    {
      assignment: "Assignment 2",
      name: "g3 Architects",
      mark: 58,
    },
    {
      assignment: "Assignment 3",
      name: "Legal Solutions",
      mark: 60,
    },
    {
      assignment: "Assignment 4",
      name: "Js Problem Solving",
      mark: 59,
    },
    {
      assignment: "Assignment 5",
      name: "Geometry Genius",
      mark: 60,
    },
  ];

  return (
    <div className="flex justify-center my-20">
      <ResponsiveContainer width="90%" height={300}>
        <AreaChart
          width={1000}
          height={300}
          data={statistics}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="assignment" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{r: 8}}
          />
          <Area type="monotone" dataKey="name" stroke="#82ca9d" />
          <Area type="monotone" dataKey="mark" stroke="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
