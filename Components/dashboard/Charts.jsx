"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ChartTooltip from "./ChartTooltip";
import { useContext } from "react";
import { NavContext } from "@/context/MyContext";

export default function Charts() {
  const { stats } = useContext(NavContext);

  return (
    <>
      <ResponsiveContainer width="100%" height={420}>
        <BarChart width={400} height={40} data={stats}>
          <XAxis dataKey="date" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} allowDecimals={false} interval={0} />
          <Tooltip
            content={<ChartTooltip />}
            cursor={{ fill: "transparent" }}
          />
          <Bar dataKey="count" fill="#00D390" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
