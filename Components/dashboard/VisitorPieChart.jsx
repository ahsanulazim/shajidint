import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import ChartTooltip from "./ChartTooltip";

const data = [
  { name: "Mobile", value: 400 },
  { name: "Tablet", value: 300 },
  { name: "Desktop", value: 300 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function VisitorPieChart() {
  return (
    <ResponsiveContainer width="100%" height={340}>
      <PieChart width={420} height={420}>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={24}
          fontWeight="bold"
          fill="oklch(70.7% 0.022 261.325)"
        >
          75%
        </text>
        <Tooltip
          content={<ChartTooltip />}
          cursor={{ fill: "transparent" }}
        />
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={100}
          outerRadius={130}
          fill="#8884d8"
          isAnimationActive={false}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${entry.name}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
