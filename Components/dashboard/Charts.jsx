'use client'

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import ChartTooltip from "./ChartTooltip";
import { useContext } from "react";
import { NavContext } from "@/context/MyContext";

export default function Charts() {

    const { stats } = useContext(NavContext)


    return (
        <>
            <ResponsiveContainer width="100%" height={500}>
                <BarChart width={400} height={40} data={stats}>
                    <CartesianGrid stroke="#ccc" vertical={false} strokeDasharray="5 5" />
                    <XAxis dataKey="date" />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip content={<ChartTooltip />} cursor={{ fill: "transparent" }} />
                    <Bar dataKey="count" fill="#00D390" radius={[10, 10, 0, 0]} />
                </BarChart>

            </ResponsiveContainer>
        </>
    )
}
