"use client";

import { useContext } from "react";
import Charts from "./Charts";
import Stats from "./Stats";
import { NavContext } from "@/context/MyContext";
import VisitorPieChart from "./VisitorPieChart";

export default function Dashboard() {
  const { massageCount, massageGrowth } = useContext(NavContext);

  const realStats = [
    {
      id: 1,
      title: "Total Visitors",
      value: "50",
      percent: "5%",
      up: true,
    },
    {
      id: 2,
      title: "Massages",
      value: massageCount,
      percent: `${Math.abs(massageGrowth)}%`,
      up: massageGrowth > 0,
    },
    {
      id: 3,
      title: "Total Expenses",
      value: "$10M",
      percent: "3%",
      up: false,
    },
    {
      id: 4,
      title: "Pending Projects",
      value: "5",
      percent: "6%",
      up: false,
    },
  ];

  return (
    <>
      <div>
        <h1 className="font-medium text-2xl sm:text-4xl tracking-tighter">
          Dashboard
        </h1>
        <p className="text-gray-400 text-sm sm:text-md tracking-tighter text-balance">
          Plan, prioritize and accomplish your tasks with ease
        </p>
      </div>
      {/* Project Status */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-5">
        {realStats.map((stat) => (
          <Stats key={stat.id} stat={stat} />
        ))}
      </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        <div className="widgetDash xl:col-span-2">
          <h2 className="text-xl mb-5 font-bold tracking-tighter">
            Massage Status
          </h2>
          <div className="divider mb-5"></div>
          <Charts />
        </div>
        <div className="widgetDash">
          <h2 className="text-xl mb-5 font-bold tracking-tighter">Visitors</h2>
          <div className="divider mb-5"></div>
          <VisitorPieChart />
          <div className="stats w-full bg-base-300">
            <div className="stat text-center">
              <h3>50%</h3>
              <p className="text-gray-500">Mobile</p>
            </div>
            <div className="stat text-center">
              <h3>50%</h3>
              <p className="text-gray-500">Tablet</p>
            </div>
            <div className="stat text-center">
              <h3>50%</h3>
              <p className="text-gray-500">Desktop</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
