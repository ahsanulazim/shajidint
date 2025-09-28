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
    <ResponsiveContainer width="100%" height={290}>
      <PieChart width={420} height={420}>
        <h2 className="">75%</h2>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={24}
          fontWeight="bold"
          fill="#333"
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
          outerRadius={120}
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
