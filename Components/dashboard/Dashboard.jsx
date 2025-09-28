"use client";

import { useContext } from "react";
import Charts from "./Charts";
import Stats from "./Stats";
import { NavContext } from "@/context/MyContext";
import VisitorPieChart from "./VisitorPieChart";

export default function Dashboard() {
  const { massageCount, massageGrowth } = useContext(NavContext);

  const dummyStats = [
    {
      id: 1,
      title: "Total Projects",
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
        {dummyStats.map((stat) => (
          <Stats key={stat.id} stat={stat} />
        ))}
      </div>
      <div className="mt-5 grid grid-cols-2">
        <div className="widgetDash">
          <h2 className="text-xl mb-5 font-bold tracking-tighter">
            Massage Status
          </h2>
          <div className="divider mb-5"></div>
          <Charts />
        </div>
        <div className="widgetdash">
          <VisitorPieChart />
        </div>
      </div>
    </>
  );
}
